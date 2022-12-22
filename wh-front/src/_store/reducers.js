import {
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_SAVE_REQUEST,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_SAVE_FAIL,
} from "./types";

//Le REDUCER = Le "cerveau" de Redux
//C'est une fonction qui va recevoir le state global et
//une action en paramètre afin de retourner
//UN NOUVEAU STATE

export function employeeListReducer(state = { employees: [] }, action) {
  switch (action.type) {
    case EMPLOYEE_LIST_REQUEST:
      return { loading: true, employees: [] };
    case EMPLOYEE_LIST_SUCCESS:
      return { loading: false, employees: action.payload };
    case EMPLOYEE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function employeeSaveReducer(state = { employee: {} }, action) {
  switch (action.type) {
    case EMPLOYEE_SAVE_REQUEST:
      return { loading: true };
    case EMPLOYEE_SAVE_SUCCESS:
      return { loading: false, success: true, employee: action.payload };
    case EMPLOYEE_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const reducers = { employeeListReducer, employeeSaveReducer };
