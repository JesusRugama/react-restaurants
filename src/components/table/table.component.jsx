import { connect } from "react-redux";
import { useDrag } from "react-dnd";
import { BiChair } from "react-icons/bi";

import { updateTableStart } from "../../redux/table/table.actions";

import { ReactComponent as TableIcon } from "../../assets/table.svg";
import { TableContainer, TableId, TableSeats, TableInfo } from "./table.styles";

const Table = ({ table, updateTableStart }) => {

  // Draggable
  const [{ isDragging }, drag] = useDrag({
    item: { table, type: "table" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult && dropResult.cellIndex) {
        updateTableStart({
          ...table,
          cellIndex: dropResult.cellIndex,
        });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <TableContainer ref={drag} style={{ opacity }}>
      <TableInfo>
        <TableId>#{table.id}</TableId>
        <TableSeats><BiChair />{table.numberOfSeats}</TableSeats>
      </TableInfo>
      <TableIcon />
    </TableContainer>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  updateTableStart: (payload) => dispatch(updateTableStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
