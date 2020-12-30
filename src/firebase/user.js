import { firestore } from "./firebase.utils";

export const updateUser = (id, data) => {
    const userRef = firestore.doc(`users/${id}`);
    userRef.update(data);

    return userRef;
}