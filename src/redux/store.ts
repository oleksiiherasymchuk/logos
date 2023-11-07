import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  user: userReducer,
});

// export type PropertiesTypes<T> = T extends { [key: string] : infer U } ? U : never;
export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

// export type PropertiesTypes<T> = T extends { [key: string] : infer U } ? any : never;

const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 25})
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store: any = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export type AppStateType = ReturnType<typeof store.getState>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
