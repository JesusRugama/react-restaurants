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

  // Reduce grid width to make space for reservations list
  const width = id ? 'calc(100% - 250px)' : '100%';

  return (
    <div className="layout-editor">
      <div style={{width}}>
      <Grid onGridCellClick={handleGridCellClick} />
      </div>
      {id && <ReservationsList tableId={id} />}
    </div>
  );
};

export default Reservations;