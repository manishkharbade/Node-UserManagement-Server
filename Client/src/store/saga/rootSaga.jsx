import { all, fork } from 'redux-saga/effects';
import { authRootSaga } from './authSaga';

export default function* rootSaga() {
    yield all([
        yield all([fork(authRootSaga)])
    ]);
}
