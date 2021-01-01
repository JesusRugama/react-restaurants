import { useEffect } from 'react';
import { connect } from "react-redux";

import ReservationsListItem from "../reservations-list-item/reservations-list-item.component"
import { ReservationsListContainer, ReservationsListTitle } from './reservations-list.styles';
import { getReservationsStart } from '../../redux/reservation/reservation.actions';
import { createStructuredSelector } from 'reselect';
import { selectReservations } from '../../redux/reservation/reservation.selectors';

const ReservationsList = ({reservations, tableId, getReservationsStart}) => {
    useEffect(()=>{
        // Get reservations by tableId
        getReservationsStart({filters: {tableId}})
    }, [getReservationsStart, tableId]);

    return (
        <ReservationsListContainer className="reservations-list-container">
            <ReservationsListTitle>Reservations for Table #{tableId}</ReservationsListTitle>
            { reservations.map((reservation) => (
                <ReservationsListItem reservation={reservation} key={reservation.id} />
            ))}
        </ReservationsListContainer>
    )
}

const mapStateToProps = createStructuredSelector({
  reservations: selectReservations,
});

const mapDispatchToProps = (dispatch) => ({
  getReservationsStart: (payload) => dispatch(getReservationsStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsList);