import { useDrop } from 'react-dnd';
import GridCell from './grid-cell.component';
import DraggableTable from '../table/draggable-table.component';

const DroppableGridCell = ({...props}) => {

    const {table, cellIndex} = props;

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

    return <GridCell ref={drop} style={{backgroundColor}} TableComponent={DraggableTable} {...props} />
}

export default DroppableGridCell;