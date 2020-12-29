import { ReactComponent as TableIcon } from '../../assets/table.svg';
import { TableContainer, TableId } from './table.styles';

const Table = () => (
    <TableContainer>
        <TableId>#1</TableId>
        <TableIcon />
        <div className="table-seats">Seats: 4</div>
    </TableContainer>
)

export default Table;