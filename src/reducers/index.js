import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import postReducer from './postReducer';

const reducers = combineReducers({
  dataReducer,
  postReducer,
});

export default reducers;
