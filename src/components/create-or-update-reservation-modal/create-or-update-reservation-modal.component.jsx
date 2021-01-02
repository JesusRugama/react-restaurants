import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Modal from "../modal/modal.component";
import {
  createReservationStart,
  updateReservationStart,
} from "../../redux/reservation/reservation.actions";
import { ButtonsBarContainer, DateTimeInputContainer } from "./create-or-update-reservation-modal.styles";
import DatePicker from '../date-picker/date-picker.component';

const TimePicker = ({name, value, label, handleChange, ...props}) => {
    const availableTimes = Array.from(Array(24).keys()).filter(v => v<=22&&v>=9)
    return (<select name={name}>
        {availableTimes.map((time, i) => <option value={time} key={i}>{time}</option>)}
    </select>)
}

const CreateOrUpdateReservationModal = ({
  reservationState,
  updateReservationStart,
  createReservationStart,
}) => {
  const { updatingReservation, setUpdatingReservation } = reservationState;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (updatingReservation.id) {
      await updateReservationStart(updatingReservation);
    } else {
      await createReservationStart(updatingReservation);
    }
    handleModalClose();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUpdatingReservation({ ...updatingReservation, [name]: value });
  };

  const handleModalClose = () => {
    setUpdatingReservation({
      id: null,
      tableId: null,
    });
  };

  return (
    <Modal onClose={handleModalClose}>
      <h1>Reservation settings</h1>

      Every reservation has a date, time, customer name, and customer contact details. All fields are required.

      <form onSubmit={handleSubmit}>
        <FormInput
          name="customerName"
          type="text"
          handleChange={handleChange}
          value={updatingReservation.customerName ?? ''}
          label="Customer Name"
          required
        />
        <FormInput
          name="contactInfo"
          type="text"
          handleChange={handleChange}
          value={updatingReservation.contactInfo ?? ''}
          label="Customer Contact Info"
          required
        />

        <DateTimeInputContainer>
            <FormInput
                FormInputComponent={DatePicker}
                name="reservationDate"
                label="Reservation Date" 
                value={updatingReservation.reservationDate ?? ''} 
                handleChange={handleChange}
                popperPlacement="top-start" />

            <FormInput
                FormInputComponent={TimePicker}
                name="reservationDateTime"
                type="text"
                label="Reservation Time" 
                handleChange={handleChange}
                value={updatingReservation.reservationDateTime ?? ''}
                required
            />
        </DateTimeInputContainer>

        <ButtonsBarContainer>
          <CustomButton type="submit"> Save </CustomButton>
        </ButtonsBarContainer>
      </form>
    </Modal>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  updateReservationStart: (payload) => dispatch(updateReservationStart(payload)),
  createReservationStart: (payload) => dispatch(createReservationStart(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrUpdateReservationModal);
