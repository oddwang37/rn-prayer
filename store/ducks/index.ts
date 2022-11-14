import {combineReducers} from 'redux';
import authReducer from './auth/slices';
import columnsReducer from './columns/slices';

const rootReducer = combineReducers({
  auth: authReducer,
  columns: columnsReducer,
});

export default rootReducer;
