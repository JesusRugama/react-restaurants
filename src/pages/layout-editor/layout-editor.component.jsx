import { useState } from 'react';

import CreateOrUpdateTableModal from "../../components/create-or-update-table-modal/create-or-update-table-modal.component";
import Grid from "../../components/grid/grid.component";
import LayoutEditorDragNDrop from './layout-editor-drag-n-drop.container';
import DroppableGridCell from '../../components/grid-cell/droppable-grid-cell.component';
import { LayoutEditorContainer } from './layout-editor.styles';

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
    <LayoutEditorContainer className="layout-editor">
      <LayoutEditorDragNDrop>
        <Grid onGridCellClick={handleGridCellClick} GridCellComponent={DroppableGridCell} />
      </LayoutEditorDragNDrop>
      {updatingTable.cellIndex && <CreateOrUpdateTableModal tableState={{updatingTable, setUpdatingTable}} />}
    </LayoutEditorContainer>
  );
}

export default LayoutEditor;