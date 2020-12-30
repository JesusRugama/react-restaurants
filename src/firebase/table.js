import { firestore } from "./firebase.utils";

export const getTables = (userId) => {
    const tablesCollectionRef = firestore.collection(`users/${userId}/tables`);

    return tablesCollectionRef.get();
}

const table = {
    getTables
}

export default table;