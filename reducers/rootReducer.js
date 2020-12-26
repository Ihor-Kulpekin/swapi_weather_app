import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import starshipsReducer from './starshipsReducer';
import starshipDetailsReducer from './starshipDetailsReducer';
import starshipAdditionalDataReducer from './starshipAdditionalDataReducer';

export default combineReducers({
  ...weatherReducer,
  ...starshipsReducer,
  ...starshipDetailsReducer,
  ...starshipAdditionalDataReducer
});
