import { useEffect, useState } from 'react';
import { connect } from "react-redux";

import ReservationsListItem from "../reservations-list-item/reservations-list-item.component"
import { ReservationsListContainer, ReservationsListTitle, ReservationsTimeFilter } from './reservations-list.styles';
import { getReservationsStart } from '../../redux/reservation/reservation.actions';
import { createStructuredSelector } from 'reselect';
import { selectReservations } from '../../redux/reservation/reservation.selectors';

const ReservationsList = ({reservations, tableId, getReservationsStart}) => {
    const [timeFilter, setTimeFilter] = useState(0);

    useEffect(()=>{
        let filters = {tableId};

        if (timeFilter > 0) {
            filters.startDate = new Date();
        } else if (timeFilter < 0) {
            filters.endDate = new Date();
        }

        getReservationsStart({filters})
    }, [getReservationsStart, tableId, timeFilter]);

    const handleFilterClick = ({target}) => {
        setTimeFilter(parseInt(target.value));
    }

    const timeFilterOptions = [
        {label: 'Past', value: -1},
        {label: 'All', value: 0},
        {label: 'Future', value: 1},
    ]

    return (
        <ReservationsListContainer className="reservations-list-container">
            <ReservationsListTitle>Reservations for Table #{tableId}</ReservationsListTitle>
            <ReservationsTimeFilter>
                {timeFilterOptions.map((timeFilterOption, i) => (
                    <button onClick={handleFilterClick}
                        key={i}
                        value={timeFilterOption.value}
                        className={timeFilter === timeFilterOption.value ? "selected": ''}
                        >{timeFilterOption.label}</button>
                ))}
            </ReservationsTimeFilter>
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