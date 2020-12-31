import { createSelector } from 'reselect';

const selectReservationStore = state => state.reservation;

export const selectReservations = createSelector(
  [selectReservationStore],
  store => store.reservations ?? []
);