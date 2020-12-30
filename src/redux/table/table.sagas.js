import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import TableActionTypes from './table.types';

import { getTablesFailure, getTablesSuccess } from './table.actions';

import firebaseTable from '../../firebase/table';
import { selectCurrentUser } from '../user/user.selectors';

export function* getTables() {
    try {
        const currentUser = yield select(selectCurrentUser);
        if (!currentUser) return;
        const tablesSnapshot = yield firebaseTable.getTables(currentUser.id);
        const tables = tablesSnapshot.docs.map(table => ({id: table.id, ...table.data()}));
        yield put(getTablesSuccess({tables}));
    } catch (error) {
        yield put(getTablesFailure(error));
    }
}

export function* onGetTablesStart() {
    yield takeLatest(TableActionTypes.GET_TABLES_START, getTables);
}

export function* tableSagas() {
  yield all([
    call(onGetTablesStart),
  ]);
}