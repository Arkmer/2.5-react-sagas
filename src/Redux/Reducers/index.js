import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import secondReducer from './secondReducer';
import elementListReducer from './elementListReducer';
// import testReducer from './testReducer';

const store = combineReducers({
    firstReducer,
    secondReducer,
    elementListReducer,
    // testReducer,
});

export default store;