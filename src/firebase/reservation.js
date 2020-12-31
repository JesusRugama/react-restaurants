import { firestore } from "./firebase.utils";

export const getReservations = (userId, {tableId, startDate, endDate}) => {
    const reservationsCollectionRef = firestore.collection(`users/${userId}/reservations`);

    return reservationsCollectionRef.get();
}

export const createReservation = (userId, reservationData) => {
    const reservationsRef = firestore.doc(`users/${userId}/reservations`);
    return reservationsRef.add({...reservationData});
}

export const updateReservation = (userId, reservationId, reservationData) => {
    const reservationRef = firestore.doc(`users/${userId}/reservations/${reservationId}`);
    reservationRef.update(reservationData);

    return reservationRef;
}

export const softDeleteReservation = (userId, reservationId) => {
    return updateReservation(userId, reservationId, {deletedAt: new Date()});
}

const reservation = {
    getReservations,
    createReservation,
    updateReservation,
    softDeleteReservation,
}

export default reservation;