import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import secondReducer from './secondReducer';
import elementListReducer from './elementListReducer';

const store = combineReducers({
    firstReducer,
    secondReducer,
    elementListReducer,
});

export default store;