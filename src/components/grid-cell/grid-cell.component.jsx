import { GridCellContainer } from "./grid-cell.styles";
import Table from "../table/table.component";
import { forwardRef } from "react";

const GridCell = (
  { table, children, cellIndex, TableComponent, ...props },
  ref
) => {
  TableComponent = TableComponent ?? Table;
  return (
    <GridCellContainer {...props} ref={ref} className={"grid-cell " + (table && 'has-table')}>
      {table && <TableComponent table={table} />}
    </GridCellContainer>
  );
};

export default forwardRef(GridCell);
