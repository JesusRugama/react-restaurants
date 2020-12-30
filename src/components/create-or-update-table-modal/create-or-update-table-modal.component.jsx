import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Modal from '../modal/modal.component';
import { updateTableStart } from '../../redux/table/table.actions';

const CreateOrUpdateTableModal = ({ tableState }) => {

  const {updatingTable, setUpdatingTable} = tableState;

  const handleSubmit = async event => {
    event.preventDefault();
    if (updatingTable.id) {
      updateTableStart({
        tableData: {...updatingTable}
      })
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUpdatingTable({ ...updatingTable, [name]: value });
  };

  const handleModalClose = () => {
    setUpdatingTable({
      id: null,
      cellIndex:null,
      numberOfSeats: null,
    })
  }

  return (
    <Modal onClose={handleModalClose}>
      <h1>Table settings</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='numberOfSeats'
          type='number'
          handleChange={handleChange}
          value={updatingTable.numberOfSeats}
          label='Number of seats'
          required
        />
        <div>
          <CustomButton type='submit'> Save </CustomButton>
        </div>
      </form>
    </Modal>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrUpdateTableModal);