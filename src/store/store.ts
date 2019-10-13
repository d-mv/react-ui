import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk,ReduxLogger));
