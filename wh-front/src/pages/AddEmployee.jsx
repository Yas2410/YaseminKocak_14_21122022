import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import selectStates from "../data/selectStates.json";
import selectDept from "../data/selectDept.json";
//Style
import "../styles/form.css";
import dayjs from "dayjs";
import { saveEmployee } from "../_store/actions";
//import { Modal } from "wh-modal-plugin";
//import logo from "../assets/wh-logo.png";
import { useDispatch, useSelector } from "react-redux";

function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState("");

  const employeeSave = useSelector((state) => state.employeeSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = employeeSave;

  //const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showError = (error) => {
    setError(error);
  };

  const formatedBirthdate = (birthDate) =>
    dayjs(birthDate).format("YYYY-MM-DD");
  const newBirthdate = formatedBirthdate(birthDate);

  const formatedStartdate = (startDate) =>
    dayjs(startDate).format("YYYY-MM-DD");
  const newStartdate = formatedStartdate(startDate);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      [
        firstName,
        lastName,
        birthDate,
        street,
        city,
        zipCode,
        state,
        department,
        startDate,
      ].includes("")
    ) {
      showError({
        msg: "EMPLOYEE RECORD ALERT : All fields are required",
        error: true,
      });
      return;
    }
    showError({ msg: "", error: false });
    //setModalIsOpen(true);
    dispatch(
      saveEmployee({
        firstName,
        lastName,
        birthDate: newBirthdate,
        street,
        city,
        zipCode,
        state,
        department,
        startDate: newStartdate,
      })
    );
    if (saveEmployee !== null) {
      setSuccess(true);
      //setModalIsOpen(true);
      setTimeout(() => {
        navigate("/employees");
        //window.location.reload();
      }, 1800);
    }
  };

  const { msg } = error;

  return (
    <div>
      <form className="employee-form" onSubmit={submitHandler}>
        <h1 className="employee-form-title">EMPLOYEE HR MASTER RECORD</h1>
        <div className="employee-form-input">
          <label>Firstname</label>
          <input
            type="text"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Firstname"
          />
        </div>
        <div className="employee-form-input">
          <label>Lastname</label>
          <input
            type="text"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Lastname"
          />
        </div>
        <div className="employee-form-input">
          <label>Birthdate</label>
          <input
            type="date"
            className="input"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="Birthdate"
          />
        </div>

        <fieldset className="employee-form-addressBox">
          <legend className="employee-form-addressBox-legend ">Address</legend>

          <div className="employee-form-input">
            <label>Street</label>
            <input
              type="text"
              className="input"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Street"
            />
          </div>
          <div className="employee-form-input">
            <label>City</label>
            <input
              type="text"
              className="input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
          <div className="employee-form-input">
            <label>Zipcode</label>
            <input
              type="text"
              className="input"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Zipcode"
            />
          </div>
          <div className="employee-form-input">
            <label className="label">State</label>

            <select
              className="selectOptions"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Select..."
            >
              {selectStates.map((state) => {
                return (
                  <option key={state.abbrev} value={state.name}>
                    {state.name}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>
        <div className="employee-form-input">
          <label>Department</label>
          <select
            className="selectOptions"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Select..."
          >
            {selectDept.map((dept) => {
              return (
                <option key={dept.abbrev} value={dept.name}>
                  {dept.name}
                </option>
              );
            })}
          </select>
          <div className="employee-form-input">
            <label className="label">Startdate</label>
            <input
              type="date"
              className="input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Startdate"
            />
          </div>
        </div>
        <div className="field">
          <div className="form-error-msg">
            <div className={`${error.error}`}>{msg}</div>
          </div>
          <div className="control">
            <button type="submit" className="submit employee-form-submit">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;

/*
<Modal
display={modalIsOpen}
setDisplay={setModalIsOpen}
img={logo}
title="SUCCESS !"
txt="The new employee has been correctly saved !"
/>
*/
