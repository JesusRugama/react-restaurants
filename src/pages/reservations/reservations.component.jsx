import Grid from '../../components/grid/grid.component';
import { useHistory, useParams } from 'react-router-dom';
import ReservationsList from '../../components/reservations-list/reservations-list.component';
import { ReservationsContainer } from './reservations.styles';

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
    <ReservationsContainer>
      <div style={{width}}>
      <Grid onGridCellClick={handleGridCellClick} />
      </div>
      {id && <ReservationsList tableId={id} key={id} />}
    </ReservationsContainer>
  );
};

export default Reservations;