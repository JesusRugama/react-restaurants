import ReservationActionTypes from "./reservation.types";

export const getReservationsStart = ({filters}) => ({
  type: ReservationActionTypes.GET_RESERVATIONS_START,
  payload: { filters },
});

export const getReservationsSuccess = ({ reservations }) => ({
  type: ReservationActionTypes.GET_RESERVATIONS_SUCCESS,
  payload: { reservations },
});

export const getReservationsFailure = (error) => ({
  type: ReservationActionTypes.GET_RESERVATIONS_FAILURE,
  payload: error,
});

export const createReservationStart = (reservationData) => ({
  type: ReservationActionTypes.CREATE_RESERVATION_START,
  payload: reservationData,
});

export const createReservationSuccess = (reservation) => ({
  type: ReservationActionTypes.CREATE_RESERVATION_SUCCESS,
  payload: reservation,
});

export const createReservationFailure = (error) => ({
  type: ReservationActionTypes.CREATE_RESERVATION_FAILURE,
  payload: error,
});

export const updateReservationStart = (reservationData) => ({
  type: ReservationActionTypes.UPDATE_RESERVATION_START,
  payload: reservationData,
});

export const updateReservationSuccess = (reservation) => ({
  type: ReservationActionTypes.UPDATE_RESERVATION_SUCCESS,
  payload: reservation,
});

export const updateReservationFailure = (error) => ({
  type: ReservationActionTypes.UPDATE_RESERVATION_FAILURE,
  payload: error,
});

export const deleteReservationStart = (reservationId) => ({
  type: ReservationActionTypes.DELETE_RESERVATION_START,
  payload: reservationId,
});

export const deleteReservationSuccess = (reservationId) => ({
  type: ReservationActionTypes.DELETE_RESERVATION_SUCCESS,
  payload: reservationId,
});

export const deleteReservationFailure = (error) => ({
  type: ReservationActionTypes.DELETE_RESERVATION_FAILURE,
  payload: error,
});
