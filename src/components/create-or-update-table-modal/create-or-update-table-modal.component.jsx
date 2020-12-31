import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Modal from "../modal/modal.component";
import {
  createTableStart,
  deleteTableStart,
  updateTableStart,
} from "../../redux/table/table.actions";
import { ButtonsBarContainer } from "./create-or-update-table-modal.styles";

const CreateOrUpdateTableModal = ({
  tableState,
  updateTableStart,
  createTableStart,
  deleteTableStart,
}) => {
  const { updatingTable, setUpdatingTable } = tableState;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (updatingTable.id) {
      await updateTableStart(updatingTable);
    } else {
      await createTableStart(updatingTable);
    }
    handleModalClose();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUpdatingTable({ ...updatingTable, [name]: value });
  };

  const handleDeleteClick = async () => {
    if (updatingTable.id) {
      await deleteTableStart(updatingTable.id);
      handleModalClose();
    }
  }

  const handleModalClose = () => {
    setUpdatingTable({
      id: null,
      cellIndex: null,
      numberOfSeats: null,
    });
  };

  return (
    <Modal onClose={handleModalClose}>
      <h1>Table settings</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="numberOfSeats"
          type="number"
          handleChange={handleChange}
          value={updatingTable.numberOfSeats}
          label="Number of seats"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Save </CustomButton>
          {updatingTable.id && (
            <CustomButton onClick={handleDeleteClick} type="button" style={{ marginLeft: "10px" }} inverted>
              Delete
            </CustomButton>
          )}
        </ButtonsBarContainer>
      </form>
    </Modal>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  updateTableStart: (payload) => dispatch(updateTableStart(payload)),
  createTableStart: (payload) => dispatch(createTableStart(payload)),
  deleteTableStart: (payload) => dispatch(deleteTableStart(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrUpdateTableModal);
