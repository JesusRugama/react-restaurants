import { createSelector } from 'reselect';

const selectReservationStore = state => {
  return state.reservation;
}

export const selectReservations = createSelector(
  [selectReservationStore],
  store => store.reservations ?? []
);