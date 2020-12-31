import { createSelector } from 'reselect';

const selectTableStore = state => state.table;

export const selectTables = createSelector(
  [selectTableStore],
  table => table.tables ?? []
);

export const selectActiveTables = createSelector(
  [selectTables],
  tables => tables.filter((table) => !table.deletedAt)
);

export const selectTableNextId = createSelector(
  [selectTables],
  tables => Math.max(...[0, ...tables.map((table) => table.id)]) + 1
)