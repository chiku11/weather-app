import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware';
import { createLogger } from 'redux-logger'
import weatherReducer from '../reducers/weatherReducer'
import { composeWithDevTools } from "redux-devtools-extension";

export const reducers = combineReducers({
    weather: weatherReducer,
});

export const store   = createStore(reducers, composeWithDevTools(applyMiddleware(createPromise(), thunk /*, createLogger()*/)));

// store.dispatch(fetchLocationWeather);
export default store;