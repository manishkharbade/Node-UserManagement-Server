// src/redux/sagas/rootSaga.js
import { all, fork } from 'redux-saga/effects';

// Import your individual sagas here
// import exampleSaga from './exampleSaga';

export default function* rootSaga() {
    yield all([
        // Fork individual sagas here
        // fork(exampleSaga),
    ]);
}
