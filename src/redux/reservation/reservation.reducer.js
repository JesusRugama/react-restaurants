import ReservationActionTypes from './reservation.types';

const INITIAL_STATE = {
  reservations: null,
  error: null,
};

const reservationReducer = (state = INITIAL_STATE, action) => {
  console.log('Reducer: ',  action.type);
  switch (action.type) {
    case ReservationActionTypes.GET_RESERVATIONS_START:
      console.log('REDUCER!!');
      return {
        ...state,
        reservations: [],
        error: null,
      };
    case ReservationActionTypes.GET_RESERVATIONS_SUCCESS:
      return {
        ...state,
        reservations: action.payload.reservations,
        error: null,
      };
    case ReservationActionTypes.CREATE_RESERVATION_SUCCESS:
      console.log({action})
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
        error: null,
      };
    case ReservationActionTypes.UPDATE_RESERVATION_SUCCESS:
    case ReservationActionTypes.DELETE_RESERVATION_SUCCESS:
      let reservations = [...state.reservations];
      const index = reservations.findIndex(reservation => reservation.id === action.payload.id);
      if (index !== -1) {
        reservations[index] = {...action.payload}
      }
      return {
        ...state,
        reservations,
        error: null,
      }
    case ReservationActionTypes.GET_RESERVATIONS_FAILURE:
    case ReservationActionTypes.CREATE_RESERVATION_FAILURE:
    case ReservationActionTypes.UPDATE_RESERVATION_FAILURE:
    case ReservationActionTypes.DELETE_RESERVATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
