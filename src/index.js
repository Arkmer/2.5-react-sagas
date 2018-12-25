import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './Redux/Reducers';
import { call, put, takeEvery } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* fetchElements() {
    try {
      const elementsResponse = yield call(() => axios.get('/api/element')); // can be written call(axios.get, '/api/element')
      yield put({ type: 'SET_ELEMENTS', payload: elementsResponse.data }); // Dispatches an action
    } catch (error) {
      console.log('fetchElements Error:', error);
    }
}

function* elementSaga() {
    yield takeEvery('FETCH_ELEMENTS', fetchElements);
}

const storeInstance = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(elementSaga);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
