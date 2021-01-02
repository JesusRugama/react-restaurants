import { connect } from "react-redux";
import { deleteReservationStart } from "../../redux/reservation/reservation.actions";
import { TiEdit, TiDocumentDelete } from "react-icons/ti";

import ReservationsListItem from './reservations-list-item.component';
import {
  ReservationActions,
} from "./reservations-list-item.styles";

const EditableReservationsListItem = ({ reservation, deleteReservationStart, onEditClick }) => {
  const handleDeleteRequest = () => {
    deleteReservationStart(reservation.id);
  };

  const handleEditRequest = () => {
    onEditClick(reservation);
  }

  return (
    <ReservationsListItem reservation={reservation}>

      <ReservationActions>
        <button onClick={handleEditRequest}>
          <TiEdit />
        </button>
        <button onClick={handleDeleteRequest}>
          <TiDocumentDelete />
        </button>
      </ReservationActions>
      
    </ReservationsListItem>
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
)(EditableReservationsListItem);
