import React from "react";
import { useState } from "react";

const FormLink = (props) => {
  const [values, setValue] = useState([]);
  const onChangeHangdler = (e) => {
    setValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddLink(values);
    setValue("");
  };
  return (
    <div className="formContainer">
      <div className="formGroup">
        <h1>Link Shortener</h1>
        <form className="formMain" onSubmit={onSubmitHandler}>
          <div className="link">
            <label htmlFor="inputLink">Enter a link: </label>
            <input
              id="inputLink"
              placeholder="example.com"
              onChange={onChangeHangdler}
              value={values}
            />
            <button className="btnEnter" type="submit">
              Enter
            </button>
          </div>
          <div className="shortDomain">
            <label>Short domain: </label>
            <span>Shrtco.de</span>
            <span>9qr.de</span>
            <span>Shiny.link</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLink
