import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import DatePicker from '../../components/date-picker/date-picker.component';
import { getReservationsStart } from '../../redux/reservation/reservation.actions';
import ReportResult from '../../components/report-result/report-result.component';

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
      <FormInput
        FormInputComponent={DatePicker}
        name="date"
        label="Select a Date" 
        value={date} 
        handleChange={handleChange}
        popperPlacement="top-start" />

      {date && <ReportResult />}
    </div>
  )
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getReservationsStart: (payload) => dispatch(getReservationsStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reports);