import axios from "axios";
import URL from "../utils/fetchData";
import {
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_SAVE_REQUEST,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_SAVE_FAIL,
} from "./types";

const getEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_LIST_REQUEST });
    const { data } = await axios.get(URL);
    dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EMPLOYEE_LIST_FAIL, payload: error.message });
  }
};

const saveEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_SAVE_REQUEST, payload: employee });

    if (!employee._id) {
      const { data } = await axios.post(`${URL}/add`, employee);
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(`${URL}/add` + employee._id, employee);
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: EMPLOYEE_SAVE_FAIL, payload: error.message });
  }
};

export { getEmployees, saveEmployee };
