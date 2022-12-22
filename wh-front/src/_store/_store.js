import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { employeeListReducer, employeeSaveReducer } from "./reducers";

const initialState = [];

const reducers = combineReducers(
  {
    employeeList: employeeListReducer,
    employeeSave: employeeSaveReducer,
  },
  []
);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  undefined,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
