import { connect } from "react-redux";
import { useDrag } from "react-dnd";

import { updateTableStart } from "../../redux/table/table.actions";

import { ReactComponent as TableIcon } from "../../assets/table.svg";
import { TableContainer, TableId } from "./table.styles";

const Table = ({ table, updateTableStart }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { table, type: "table" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
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
    <TableContainer className="table-draggable" ref={drag} style={{ opacity }}>
      <TableId>{table.id}</TableId>
      <TableIcon />
      <div className="table-seats">Seats: {table.numberOfSeats}</div>
    </TableContainer>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  updateTableStart: (payload) => dispatch(updateTableStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
