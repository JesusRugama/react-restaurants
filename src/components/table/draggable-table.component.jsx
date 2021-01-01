import { connect } from "react-redux";
import { useDrag } from "react-dnd";

import { updateTableStart } from "../../redux/table/table.actions";
import Table from "./table.component";

const DraggableTable = ({ updateTableStart, ...props }) => {

  const {table} = props;

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
    <Table ref={drag} style={{ opacity }} {...props} />
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  updateTableStart: (payload) => dispatch(updateTableStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraggableTable);
