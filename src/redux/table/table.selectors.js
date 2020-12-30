import { createSelector } from 'reselect';

const selectTableStore = state => state.table;

export const selectTables = createSelector(
  [selectTableStore],
  table => table.tables ?? []
);