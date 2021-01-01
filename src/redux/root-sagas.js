import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { tableSagas } from './table/table.sagas';
import { reservationSagas } from './reservation/reservation.sagas';

export default function* rootSaga() {
  yield all([
      call(reservationSagas),
      call(userSagas),
      call(tableSagas),
  ]);
}