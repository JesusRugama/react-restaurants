import { createSelector } from 'reselect';

const selectReservationStore = state => {
  return state.reservation;
}

export const selectReservations = createSelector(
  [selectReservationStore],
  store => {
    const reservations = store.reservations ?? []
    return reservations.filter((reservation) => !reservation.deletedAt)
  }
);