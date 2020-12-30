import TableActionTypes from "./table.types.js";

export const getTablesStart = () => ({
  type: TableActionTypes.GET_TABLES_START,
});

export const getTablesSuccess = ({ tables }) => ({
  type: TableActionTypes.GET_TABLES_SUCCESS,
  payload: { tables },
});

export const getTablesFailure = (error) => ({
  type: TableActionTypes.GET_TABLES_FAILURE,
  payload: error,
});

export const createTableStart = ({ tableData }) => ({
  type: TableActionTypes.CREATE_TABLE_START,
  payload: { tableData },
});

export const createTableSuccess = ({ table }) => ({
  type: TableActionTypes.CREATE_TABLE_SUCCESS,
  payload: { table },
});

export const createTableFailure = (error) => ({
  type: TableActionTypes.CREATE_TABLE_FAILURE,
  payload: error,
});

export const updateTableStart = ({ tableData }) => ({
  type: TableActionTypes.UPDATE_TABLE_START,
  payload: { tableData },
});

export const updateTableSuccess = ({ table }) => ({
  type: TableActionTypes.UPDATE_TABLE_SUCCESS,
  payload: { table },
});

export const updateTableFailure = (error) => ({
  type: TableActionTypes.UPDATE_TABLE_FAILURE,
  payload: error,
});

export const deleteTableStart = ({ tableId }) => ({
  type: TableActionTypes.DELETE_TABLE_START,
  payload: { tableId },
});

export const deleteTableSuccess = ({ table }) => ({
  type: TableActionTypes.DELETE_TABLE_SUCCESS,
  payload: { table },
});

export const deleteTableFailure = (error) => ({
  type: TableActionTypes.DELETE_TABLE_FAILURE,
  payload: error,
});
