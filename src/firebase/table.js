import { firestore } from "./firebase.utils";

export const getTables = (userId) => {
    const tablesCollectionRef = firestore.collection(`users/${userId}/tables`);

    return tablesCollectionRef.get();
}

export const createTable = (userId, tableId, tableData) => {
    const tableRef = firestore.doc(`users/${userId}/tables/${tableId}`);
    delete tableData.id;
    return {tableRef, promise: tableRef.set({...tableData})};
}

export const updateTable = (userId, tableId, tableData) => {
    const tableRef = firestore.doc(`users/${userId}/tables/${tableId}`);
    tableRef.update(tableData);

    return tableRef;
}

export const softDeleteTable = (userId, tableId) => {
    return updateTable(userId, tableId, {deletedAt: new Date()});
}

const table = {
    getTables,
    createTable,
    updateTable,
    softDeleteTable,
}

export default table;