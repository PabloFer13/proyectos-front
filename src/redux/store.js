import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { createBrowserHistory as createHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import logger from '../middleware/logger';
import rootSaga from './sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleWare();
const routeMiddleware = routerMiddleware(history);
const middlewares = [logger, sagaMiddleware, routeMiddleware];

const appliedMiddlewares = applyMiddleware(...middlewares);

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(appliedMiddlewares)
);

sagaMiddleware.run(rootSaga);

export { store, history };
