import { combineReducers } from 'redux';
import ReducerRequest from './reducers';
import ReducerTitle from './reducers/title';

export default combineReducers({
  ReducerRequest,
  ReducerTitle
});
