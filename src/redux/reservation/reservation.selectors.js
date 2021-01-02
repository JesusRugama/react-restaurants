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

export const selectReservationsGroupedByTable = createSelector(
  [selectReservations],
  reservations => {
    const grouped = reservations.reduce(function(accumulator, reservation) {
      (accumulator[reservation.tableId] = accumulator[reservation.tableId] || []).push(reservation);
      return accumulator;
    }, {});

    return Object.values(grouped) ?? [];
  }
)