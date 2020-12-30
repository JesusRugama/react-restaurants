import GridCell from '../grid-cell/grid-cell.component';
import { GridContainer } from './grid.styles';

const Grid = () => (
    <GridContainer>
        { Array(150).fill('').map((val,i) => <GridCell key={i} />) }
    </GridContainer>
)

export default Grid;