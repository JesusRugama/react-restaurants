import { connect } from "react-redux";
import { deleteReservationStart } from "../../redux/reservation/reservation.actions";
import { TiEdit, TiDocumentDelete } from "react-icons/ti";
import {
  CustomerContactInfo,
  CustomerName,
  ReservationContainer,
  ReservationDate,
  ReservationTime,
  ReservationActions,
} from "./reservations-list-item.styles";

const ReservationsListItem = ({ reservation, deleteReservationStart }) => {
  const handleDeleteRequest = () => {
    deleteReservationStart(reservation.id);
  };
  return (
    <ReservationContainer>
      <ReservationDate>
        {reservation.reservationDate.toDate().toLocaleDateString()}
      </ReservationDate>
      <ReservationTime>
        {reservation.reservationDate.toDate().toLocaleTimeString()}
      </ReservationTime>
      <CustomerName>{reservation.customerName}</CustomerName>
      <CustomerContactInfo>{reservation.contactInfo}</CustomerContactInfo>

      <ReservationActions>
        <button>
          <TiEdit />
        </button>
        <button onClick={handleDeleteRequest}>
          <TiDocumentDelete />
        </button>
      </ReservationActions>
    </ReservationContainer>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  deleteReservationStart: (payload) =>
    dispatch(deleteReservationStart(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationsListItem);
