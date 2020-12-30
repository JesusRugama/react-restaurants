import { ReactComponent as TableIcon } from '../../assets/table.svg';
import { TableContainer, TableId } from './table.styles';

const Table = ({table}) => {
    return (
        <TableContainer>
            <TableId>{table.id}</TableId>
            <TableIcon />
            <div className="table-seats">Seats: {table.numberOfSeats}</div>
        </TableContainer>
    )
}

export default Table;