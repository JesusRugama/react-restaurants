import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { tableSagas } from './table/table.sagas';

export default function* rootSaga() {
  yield all([
      call(userSagas),
      call(tableSagas),
  ]);
}