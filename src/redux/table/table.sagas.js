import { takeLatest, put, all, call, select } from "redux-saga/effects";
import TableActionTypes from "./table.types";

import {
  getTablesFailure,
  getTablesSuccess,
  updateTableSuccess,
  updateTableFailure,
  createTableSuccess,
  createTableFailure,
  deleteTableSuccess,
  deleteTableFailure,
} from "./table.actions";

import firebaseTable from "../../firebase/table";
import { selectCurrentUser } from "../user/user.selectors";
import { selectTableNextId } from "./table.selectors";

export function* getTables() {
  try {
    const currentUser = yield select(selectCurrentUser);
    if (!currentUser) return;
    const tablesSnapshot = yield firebaseTable.getTables(currentUser.id);
    const tables = tablesSnapshot.docs.map((table) => ({
      id: table.id,
      ...table.data(),
    }));
    yield put(getTablesSuccess({ tables }));
  } catch (error) {
    yield put(getTablesFailure(error));
  }
}

export function* updateTable({ payload: { id, ...tableData } }) {
  try {
    const currentUser = yield select(selectCurrentUser);
    if (!currentUser) return;
    const tableRef = yield firebaseTable.updateTable(
      currentUser.id,
      id,
      tableData
    );
    const tableSnapshot = yield tableRef.get();
    const updatedTable = tableSnapshot.data();
    yield put(updateTableSuccess({ id, ...updatedTable }));
  } catch (error) {
    yield put(updateTableFailure(error));
  }
}

export function* createTable({ payload: { ...tableData } }) {
  try {
    const currentUser = yield select(selectCurrentUser);
    if (!currentUser) return;
    const id = yield select(selectTableNextId);
    const {tableRef, promise} = firebaseTable.createTable(
      currentUser.id,
      id,
      tableData
    );
    yield promise;
    const tableSnapshot = yield tableRef.get();
    const table = tableSnapshot.data();
    yield put(createTableSuccess({ id: tableSnapshot.id, ...table }));
  } catch (error) {
    yield put(createTableFailure(error));
  }
}

export function* softDeleteTable({ payload }) {
  try {
    const currentUser = yield select(selectCurrentUser);
    if (!currentUser) return;
    firebaseTable.softDeleteTable(currentUser.id, payload);
    yield put(deleteTableSuccess({ id: payload }));
  } catch (error) {
    yield put(deleteTableFailure(error));
  }
}

export function* onGetTablesStart() {
  yield takeLatest(TableActionTypes.GET_TABLES_START, getTables);
}

export function* onUpdateTableStart() {
  yield takeLatest(TableActionTypes.UPDATE_TABLE_START, updateTable);
}

export function* onCreateTableStart() {
  yield takeLatest(TableActionTypes.CREATE_TABLE_START, createTable);
}

export function* onDeleteTableStart() {
  yield takeLatest(TableActionTypes.DELETE_TABLE_START, softDeleteTable);
}

export function* tableSagas() {
  yield all([
    call(onGetTablesStart),
    call(onUpdateTableStart),
    call(onCreateTableStart),
    call(onDeleteTableStart),
  ]);
}
