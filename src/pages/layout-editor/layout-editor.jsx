import CreateOrUpdateTableModal from "../../components/create-or-update-table-modal/create-or-update-table-modal.component";
import Grid from "../../components/grid/grid.component";
import { useState } from 'react';

const LayoutEditor = () => {
  let [updatingTable, setUpdatingTable] = useState({
    id: null,
    cellIndex: null,
    numberOfSeats: null,
  });

  /**
   * When a grid cel its clicked, the cellIndex and existing table will be set on updatingTable
   *
   * @param integer cellIndex
   * @param object|undefined table
   */
  const handleGridCellClick = (cellIndex, table) => {
    if (table) {
      const {id, numberOfSeats} = table;
      setUpdatingTable({id, cellIndex, numberOfSeats});
      return;
    }
    setUpdatingTable({id:null, cellIndex, numberOfSeats:1});
  }

  return (
    <div className="layout-editor">
      <Grid onGridCellClick={handleGridCellClick} />
      {updatingTable.cellIndex && <CreateOrUpdateTableModal tableState={{updatingTable, setUpdatingTable}} />}
    </div>
  );
}

export default LayoutEditor;