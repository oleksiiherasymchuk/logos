import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  user: userReducer,
});

const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 25})
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store;
