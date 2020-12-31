import TableActionTypes from "./table.types";

const INITIAL_STATE = {
  tables: null,
  error: null,
};

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TableActionTypes.GET_TABLES_SUCCESS:
      return {
        ...state,
        tables: action.payload.tables,
        error: null,
      };
    case TableActionTypes.CREATE_TABLE_SUCCESS:
      return {
        ...state,
        tables: [...state.tables, action.payload.table],
        error: null,
      };
    case TableActionTypes.UPDATE_TABLE_SUCCESS:
    case TableActionTypes.DELETE_TABLE_SUCCESS:
      let tables = [...state.tables];
      console.log({state, action})
      const index = tables.findIndex(table => table.id === action.payload.id);
      if (index !== -1) {
        tables[index] = {...action.payload}
        //tables.splice(index, 1); Delete
      }
      return {
        ...state,
        tables,
        error: null,
      }
    case TableActionTypes.GET_TABLES_FAILURE:
    case TableActionTypes.CREATE_TABLE_FAILURE:
    case TableActionTypes.UPDATE_TABLE_FAILURE:
    case TableActionTypes.DELETE_TABLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tableReducer;
