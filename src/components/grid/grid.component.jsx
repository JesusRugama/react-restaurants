import GridCell from "../grid-cell/grid-cell.component";
import { GridContainer } from "./grid.styles";
import { useEffect } from "react";

import { getTablesStart } from "../../redux/table/table.actions";
import { selectActiveTables } from "../../redux/table/table.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Grid = ({ onGridCellClick, getTablesStart, tables }) => {
  useEffect(() => {
    getTablesStart();
  }, [getTablesStart]);

  return (
    <DndProvider backend={HTML5Backend}>
        <GridContainer className="grid">
        {Array(150)
            .fill("")
            .map((val, i) => {
            const table = tables.find(table => table.cellIndex === i);
            return (
                <GridCell
                table={table}
                onClick={() => {
                    onGridCellClick(i,table);
                }}
                cellIndex={i}
                key={i}
                />
            );
            })}
        </GridContainer>
    </DndProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  tables: selectActiveTables,
});

const mapDispatchToProps = (dispatch) => ({
  getTablesStart: () => dispatch(getTablesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
