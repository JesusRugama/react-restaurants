import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectReservationsGroupedByTable } from '../../redux/reservation/reservation.selectors';
import ReservationsListItem from '../../components/reservations-list-item/reservations-list-item.component';
import { ReservationsTableGroup, ReservationsTableGroupTitle } from './report-result.styles';

const ReportResult = ({ reservationGroups }) => {
  return (<div>
    {reservationGroups.map((reservations) => {
      const tableId = reservations[0].tableId;
      return (
        <ReservationsTableGroup key={tableId}>
          <ReservationsTableGroupTitle>Table ID: {tableId}</ReservationsTableGroupTitle>

          {reservations.map((reservation, i) => (
            <ReservationsListItem reservation={reservation} key={i} />
          ))}
        </ReservationsTableGroup>
      );
    })}
  </div>);
};

const mapStateToProps = createStructuredSelector({
  reservationGroups: selectReservationsGroupedByTable,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ReportResult);
