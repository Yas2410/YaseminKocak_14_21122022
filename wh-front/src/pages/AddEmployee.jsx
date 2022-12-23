import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import selectStates from "../data/selectStates.json";
import selectDept from "../data/selectDept.json";
//Style
import "../styles/form.css";
import dayjs from "dayjs";
import { saveEmployee } from "../_store/actions";
//Modal
import { Modal } from "yk-react-modal-plugin";
import logo from "../assets/wh-logo.png";
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

  //Par défaut, ma modale est fermée
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  //Dispatch des actions
  const dispatch = useDispatch();

  //Message d'erreur sur le formulaire
  const showError = (error) => {
    setError(error);
  };

  //Formatage des données (type string) en format date
  // + format d'affichage dans ma table
  const formatedBirthdate = (birthDate) =>
    dayjs(birthDate).format("YYYY-MM-DD");
  const newBirthdate = formatedBirthdate(birthDate);

  const formatedStartdate = (startDate) =>
    dayjs(startDate).format("YYYY-MM-DD");
  const newStartdate = formatedStartdate(startDate);

  /*Ici, si lors de l'envoi de mon formulaire,
  un ou plusieurs input restent vides, 
  un message d'erreur va être retourné indiquant
  que l'ensemble des inputs doivent être complétés*/

  /*A l'inverse, si l'ensemble de mes champs sont 
  correctement complétés,  le state de mon message
  d'erreur repasse en false (i.e il ne s'affiche plus
  et la modale passe a true, cest à dire qu'elle vient
  bien confirmer l'enregistrement de l'employé en BDD.
  Je suis redirigée vers la liste comprenant l'ensemble
  de mes employés + l'employé nouvellement enregistré
  */

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
    setModalIsOpen(true);
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
      setModalIsOpen(true);
      setTimeout(() => {
        navigate("/employees");
        //window.location.reload();
      }, 1800);
    }
  };

  const { msg } = error;

  return (
    <div>
      <div>
        {loadingSave && <div>Loading...</div>}
        {errorSave && <div>{errorSave}</div>}
      </div>
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
            pattern="^[A-Za-z.\s_-]+$"
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
            pattern="^[A-Za-z.\s_-]+$"
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
              pattern="^[A-Za-z.\s_-]+$"
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
              pattern="[0-9]{5}"
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

      <Modal
        display={modalIsOpen}
        setDisplay={setModalIsOpen}
        img={logo}
        title="SUCCESS !"
        txt="The new employee has been correctly saved !"
      />
    </div>
  );
}

export default AddEmployee;
