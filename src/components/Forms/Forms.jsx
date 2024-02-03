import React from "react";
import { useState } from "react";
import CheckBoxMultiple from "../CheckBox/CheckBoxMultiple";
import CheckboxGroup from "../CheckBox/CheckBoxGroup";
import "./Forms.css";

function Forms() {
  const [firstname, setfirstname] = useState("");
  const [lastName, setlastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [radio, setRadio] = useState("option1");
  const [dropdown, setDropdown] = useState("option1");
  const [dropdown2, setDropdown2] = useState("option1");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("#333");

  const handleSubmitButton = (event) => {
    event.preventDefault();
    console.log("Form data:", {
      firstname,
      lastName,
      number,
      email,
      password,
      radio,
      dropdown,
      dropdown2,
      date,
      color,
    });

    // Reset the form fields by setting the state to empty strings
    setfirstname("");
    setlastName("");
    setNumber("");
    setEmail("");
    setPassword("");
    setRadio("option1");
    setDropdown("option1");
    setDropdown2("option1");
    setDate("");
    setColor("");
  };

  return (
    <>
      <form className="custom-form" onSubmit={handleSubmitButton}>
        <div>
          <label>
            FirstName:
            <input
              type="text"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            LastName:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </label>
        </div>
        {/* Number Input */}
        <div>
          <label>
            Enter your Age:
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
        </div>

        {/* Email Input */}
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        {/* Password Input */}
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        {/* Checkbox */}
        <div>
          <CheckboxGroup />
        </div>
        <div>
          <label>
            <br />
            Select Your Gender:
            <input
              type="radio"
              value="option1"
              checked={radio === "option1"}
              onChange={() => setRadio("option1")}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              value="option2"
              checked={radio === "option2"}
              onChange={() => setRadio("option2")}
            />
            Female
          </label>
        </div>
        <br />
        {/* Dropdown */}
        <div>
          <label>
            Select your College/University:
            <select
              value={dropdown}
              onChange={(e) => setDropdown(e.target.value)}
            >
              <option value="option1">MAJU</option>
              <option value="option2">SSUET</option>
              <option value="option3">IU</option>
              <option value="option4">Zabist</option>
              <option value="option5">Federal</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Select your Degree:
            <select
              value={dropdown2}
              onChange={(e) => setDropdown2(e.target.value)}
            >
              <option value="option1">BSCS</option>
              <option value="option2">BSSE</option>
              <option value="option3">BEE</option>
              <option value="option4">MBBS</option>
            </select>
          </label>
        </div>

        {/* Date Picker */}
        <div>
          <label>
            Degree Completion Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <CheckBoxMultiple />

        {/* Color Picker */}
        <div>
          <label>
            Choose a color:
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default Forms;
