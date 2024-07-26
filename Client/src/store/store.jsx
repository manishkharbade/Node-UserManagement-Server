import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './saga/rootSaga';
import rootReducer from "./reducers/rootReducer"
// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create logger middleware
const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: false,
    duration: true,
});

// Combine all middlewares
const middlewares = [sagaMiddleware, loggerMiddleware];

// Create the Redux store
const store = createStore(
    rootReducer, // Use rootReducer to combine all reducers
    applyMiddleware(...middlewares)
);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
