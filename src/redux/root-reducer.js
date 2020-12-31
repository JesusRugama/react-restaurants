import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import tableReducer from './table/table.reducer';
import UserActionTypes from './user/user.types';
import cogoToast from 'cogo-toast';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const appReducer = combineReducers({
  user: userReducer,
  table: tableReducer,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === UserActionTypes.SIGN_OUT_SUCCESS) {
    state = undefined;
  }

  // Show Toastr on Failure message
  if (action.type.includes('FAILURE') && action.payload) {
    const payload = action.payload;
    const errorMessage = (payload && payload.message) ?? payload;
    cogoToast.error(errorMessage);
  }

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);