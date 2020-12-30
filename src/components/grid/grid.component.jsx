import GridCell from "../grid-cell/grid-cell.component";
import { GridContainer } from "./grid.styles";
import { useEffect } from "react";

import { getTablesStart } from "../../redux/table/table.actions";
import { selectTables } from "../../redux/table/table.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const Grid = ({ onGridCellClick, getTablesStart, tables }) => {
  useEffect(() => {
    getTablesStart();
  }, [getTablesStart]);

  return (
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
              key={i}
            />
          );
        })}
    </GridContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  tables: selectTables,
});

const mapDispatchToProps = (dispatch) => ({
  getTablesStart: () => dispatch(getTablesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
