import GridCell from '../grid-cell/grid-cell.component';
import { GridContainer } from './grid.styles';

const Grid = () => (
    <GridContainer>
        { Array(150).fill('').map(() => <GridCell />) }
    </GridContainer>
)

export default Grid;