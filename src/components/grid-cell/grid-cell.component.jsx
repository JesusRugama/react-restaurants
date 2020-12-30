import { GridCellContainer } from './grid-cell.styles';
import Table from '../table/table.component';

const GridCell = ({table, ...props}) => {
    return (
        <GridCellContainer {...props}>
            { table && <Table table={table} />}
        </GridCellContainer>
    )
}

export default GridCell;