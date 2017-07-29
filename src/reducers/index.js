import { applyMiddleware, combineReducers, createStore } from 'redux';
import UserReducer from '.././reducers/UserReducer';
import ProgrammerReducer from '.././reducers/ProgrammerReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    users: UserReducer,
    programmers: ProgrammerReducer
});

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    middleware
);