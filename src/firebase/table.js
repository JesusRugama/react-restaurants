import { firestore } from "./firebase.utils";

export const getTables = (userId) => {
    const tablesCollectionRef = firestore.collection(`users/${userId}/tables`);

    return tablesCollectionRef.get();
}

export const updateTable = (userId, tableId, tableData) => {
    const tableRef = firestore.doc(`users/${userId}/tables/${tableId}`);
    console.log({tableData})
    tableRef.update(tableData);

    return tableRef;
}

const table = {
    getTables,
    updateTable
}

export default table;