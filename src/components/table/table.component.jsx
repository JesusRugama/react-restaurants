import { forwardRef } from "react";
import { BiChair } from "react-icons/bi";

import { ReactComponent as TableIcon } from "../../assets/table.svg";
import { TableContainer, TableId, TableSeats, TableInfo } from "./table.styles";

const Table = ({ table, ...props }, ref) => {
  return (
    <TableContainer {...props} ref={ref}>
      <TableInfo>
        <TableId>#{table.id}</TableId>
        <TableSeats><BiChair />{table.numberOfSeats}</TableSeats>
      </TableInfo>
      <TableIcon />
    </TableContainer>
  );
};

export default forwardRef(Table);
