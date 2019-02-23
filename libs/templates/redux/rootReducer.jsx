import {combineReducers} from 'redux';

import Reducer from './reducer';

const rootReducer = combineReducers({
  rawrs: Reducer
});

export default rootReducer;