import { firestore } from "./firebase.utils";

export const getReservations = (userId, {tableId, startDate, endDate}) => {
    let query = firestore.collection(`users/${userId}/reservations`);

    if (tableId) {
        query = query.where("tableId", "==", parseInt(tableId))
            .orderBy("reservationDate", "desc")
    } else {
        query = query.orderBy("reservationDate", "asc")
    }

    if (startDate) {
        query = query.where("reservationDate", ">=", startDate)
    }

    if (endDate) {
        query = query.where("reservationDate", "<=", endDate)
    }

    return query.get();
}

const beforeSave = (reservation) => {
    return {
        ...reservation,
        tableId: parseInt(reservation.tableId)
    };
}

export const createReservation = (userId, reservationData) => {
    reservationData = beforeSave(reservationData);
    const reservationsRef = firestore.collection(`users/${userId}/reservations`);
    return reservationsRef.add({...reservationData});
}

export const updateReservation = (userId, reservationId, reservationData) => {
    reservationData = beforeSave(reservationData);
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