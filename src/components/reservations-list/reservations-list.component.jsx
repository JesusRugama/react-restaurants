import { useEffect, useState } from "react";
import { connect } from "react-redux";

import EditableReservationsListItem from "../reservations-list-item/editable-reservations-list-item.component";
import {
  ReservationsListContainer,
  ReservationsListTitle,
  NewReservationButtonContainer,
  ReservationsListItemsContainer,
} from "./reservations-list.styles";
import { getReservationsStart } from "../../redux/reservation/reservation.actions";
import { createStructuredSelector } from "reselect";
import { selectReservations } from "../../redux/reservation/reservation.selectors";
import CreateOrUpdateReservationModal from "../create-or-update-reservation-modal/create-or-update-reservation-modal.component";
import ReservationsFilter from "../reservations-filter/reservations-filter.component";

const ReservationsList = ({ reservations, tableId, getReservationsStart }) => {
  /**
   * Filters for getting reservations from firestore
   */
  const [filters, setFilters] = useState({
    tableId,
    startDate: null,
    endDate: null,
  });

  // On filter change, update reservations
  useEffect(() => {
    getReservationsStart({ filters });
  }, [getReservationsStart, filters]);

  /**
   * Holds the reservation data that is being updated/created
   */
  const [updatingReservation, setUpdatingReservation] = useState({
    id: null,
    tableId: null,
  });

  const editReservation = (reservation) => {
    setUpdatingReservation({
      ...reservation,
      reservationDate: reservation.reservationDate.toDate(),
      tableId,
    });
  };

  const createReservation = () => {
    setUpdatingReservation({ tableId });
  };

  return (
    <ReservationsListContainer className="reservations-list-container">
      <ReservationsListTitle>
        Reservations for Table #{tableId}
      </ReservationsListTitle>

      <NewReservationButtonContainer>
        <button onClick={createReservation}>Add reservation</button>
      </NewReservationButtonContainer>

      <ReservationsFilter {...{ filters, setFilters }} />

      <ReservationsListItemsContainer>
        {reservations.map((reservation) => (
          <EditableReservationsListItem
            reservation={reservation}
            key={reservation.id}
            onEditClick={editReservation}
          />
        ))}
      </ReservationsListItemsContainer>

      {updatingReservation.tableId && (
        <CreateOrUpdateReservationModal
          reservationState={{ updatingReservation, setUpdatingReservation }}
        />
      )}
    </ReservationsListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  reservations: selectReservations,
});

const mapDispatchToProps = (dispatch) => ({
  getReservationsStart: (payload) => dispatch(getReservationsStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsList);
