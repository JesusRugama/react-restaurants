import { GridCellContainer } from './grid-cell.styles';
import Table from '../table/table.component';
import { useDrop } from 'react-dnd';

const GridCell = ({table, cellIndex, ...props}) => {

    // Droppable
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'table',
        drop: () => {
            if (canDrop) {
                // Only return cell destination when canDrop == true
                return { cellIndex };
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop() && !table,
        }),
    });

    const backgroundColor = (isOver && canDrop) ? '#fCC': '#FFF';

    return (
        <GridCellContainer {...props} ref={drop} style={{backgroundColor}}>
            { table && <Table table={table} />}
        </GridCellContainer>
    )
}

export default GridCell;