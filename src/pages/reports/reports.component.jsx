import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ReservationsListItem from '../../components/reservations-list-item/reservations-list-item.component';
import FormInput from '../../components/form-input/form-input.component';
import DatePicker from '../../components/date-picker/date-picker.component';
import { getReservationsStart } from '../../redux/reservation/reservation.actions';
import { selectReservationsGroupedByTable } from '../../redux/reservation/reservation.selectors';

const Reports = ({reservationGroups, getReservationsStart}) => {
  /**
   * Filters for getting reservations from firestore
   */
  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
  });
  useEffect(()=>{
    if (filters.startDate || filters.endDate) {
      getReservationsStart({filters})
    }
  }, [getReservationsStart, filters]);

  const [date, setDate] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    setDate(value);

    const startDate = (new Date(value.setHours(0,0,0,0)));
    const endDate = (new Date(value.setHours(23,59,59,999)));

    setFilters({ startDate, endDate });
  };

  return (
    <div>
      <p>To start, select a Date</p>
      <FormInput
        FormInputComponent={DatePicker}
        name="date"
        label="Date" 
        value={date} 
        handleChange={handleChange}
        popperPlacement="top-start" />

      <div>
        {reservationGroups.map(reservations => {
          const tableId = reservations[0].tableId;
          return (<div key={tableId}>Table ID: {tableId}
            {reservations.map((reservation, i) => <ReservationsListItem reservation={reservation} key={i} />)}</div>
        )})}
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  reservationGroups: selectReservationsGroupedByTable,
});

const mapDispatchToProps = (dispatch) => ({
  getReservationsStart: (payload) => dispatch(getReservationsStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reports);