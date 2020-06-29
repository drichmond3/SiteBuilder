import { combineReducers } from 'redux';

import userState from './states/user';

const rootReducer = combineReducers({
  userState
});

export default rootReducer;