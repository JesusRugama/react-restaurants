import { takeLatest, put, all, call, select } from "redux-saga/effects";
import ReservationActionTypes from './reservation.types';

import {
  getReservationsFailure,
  getReservationsSuccess,
  updateReservationSuccess,
  updateReservationFailure,
  createReservationSuccess,
  createReservationFailure,
  deleteReservationSuccess,
  deleteReservationFailure,
} from "./reservation.actions";

import firebaseReservation from "../../firebase/reservation";
import { selectCurrentUser } from '../user/user.selectors';

export function* getReservations({ filters }) {
  try {
    const currentUser = yield select(selectCurrentUser);
    if (!currentUser) return;
    const reservationsSnapshot = yield firebaseReservation.getReservations(currentUser.id, filters);
    const reservations = reservationsSnapshot.docs.map((reservation) => ({
      id: reservation.id,
      ...reservation.data(),
    }));
    yield put(getReservationsSuccess({ reservations }));
  } catch (error) {
    yield put(getReservationsFailure(error));
  }
}

export function* updateReservation({ payload: { id, ...reservationData } }) {
  try {
    const currentUser = yield select(selectCurrentUser);
    if (!currentUser) return;
    const reservationRef = yield firebaseReservation.updateReservation(
      currentUser.id,
      id,
      reservationData
    );
    const reservationSnapshot = yield reservationRef.get();
    const updatedReservation = reservationSnapshot.data();
    yield put(updateReservationSuccess({ id, ...updatedReservation }));
  } catch (error) {
    yield put(updateReservationFailure(error));
  }
}

export function* createReservation({ payload: { ...reservationData } }) {
  try {
    const currentUser = yield select(selectCurrentUser);
    if (!currentUser) return;
    const reservationRef = yield firebaseReservation.createReservation(
      currentUser.id,
      reservationData
    );
    const reservationSnapshot = yield reservationRef.get();
    const reservation = reservationSnapshot.data();
    yield put(createReservationSuccess({ id: reservationSnapshot.id, ...reservation }));
  } catch (error) {
    yield put(createReservationFailure(error));
  }
}

export function* softDeleteReservation({ payload }) {
  try {
    const currentUser = yield select(selectCurrentUser);
    if (!currentUser) return;
    firebaseReservation.softDeleteReservation(currentUser.id, payload);
    yield put(deleteReservationSuccess({ id: payload }));
  } catch (error) {
    yield put(deleteReservationFailure(error));
  }
}

export function* onGetReservationsStart() {
  yield takeLatest(ReservationActionTypes.GET_RESERVATIONS_START, getReservations);
}

export function* onUpdateReservationStart() {
  yield takeLatest(ReservationActionTypes.UPDATE_RESERVATION_START, updateReservation);
}

export function* onCreateReservationStart() {
  yield takeLatest(ReservationActionTypes.CREATE_RESERVATION_START, createReservation);
}

export function* onDeleteReservationStart() {
  yield takeLatest(ReservationActionTypes.DELETE_RESERVATION_START, softDeleteReservation);
}

export function* reservationSagas() {
  yield all([
    call(onGetReservationsStart),
    call(onUpdateReservationStart),
    call(onCreateReservationStart),
    call(onDeleteReservationStart),
  ]);
}
