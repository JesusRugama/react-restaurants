import { GridCellContainer } from './grid-cell.styles';
import Table from '../table/table.component';
import { useDrag, useDrop } from 'react-dnd';

const GridCell = ({table, cellIndex, ...props}) => {

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'table',
        drop: () => ({ cellIndex }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <GridCellContainer {...props} ref={drop}>
            { table && <Table table={table} />}
        </GridCellContainer>
    )
}

export default GridCell;