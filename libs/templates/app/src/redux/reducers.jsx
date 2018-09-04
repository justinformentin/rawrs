import {combineReducers} from 'redux';

import RawrsReducer from './reducer_rawrs';

const rootReducer = combineReducers({
  rawrss: RawrsReducer
});

export default rootReducer;