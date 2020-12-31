import Grid from '../../components/grid/grid.component';
import { useHistory, useParams } from 'react-router-dom';
import ReservationsList from '../../components/reservations-list/reservations-list.component';

const Reservations = () => {
  let history = useHistory();

  let { id } = useParams();

  const handleGridCellClick = (cellIndex, table) => {
    if (table) {
      history.push(`/table/${table.id}/reservations`)
    }
  }

  return (
    <div className="layout-editor">
      <Grid onGridCellClick={handleGridCellClick} />
      {id && <ReservationsList tableId={id} />}
    </div>
  );
};

export default Reservations;