import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './RegisterForm.css'

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const history = useHistory();
  
  const registerUser = (event) => {
    event.preventDefault();
    debugger;
    dispatch({
      type: 'REGISTER',
      payload: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
      },
    });
  }; // end registerUser

  return (
<form className="join-form" onSubmit={registerUser}>
  {errors.registrationMessage && (
    <h3 className="alert" role="alert">
      {errors.registrationMessage}
    </h3>
  )}
  <div className="mb-3">
    <label htmlFor="firstName" className="join-title-style">
      FIRST NAME
    </label>
    <input
        type="text"
        className="input-join-form mx-auto"
        name="firstName"
        required
        autoComplete="off"
        value={firstName}
        placeholder="*first name"
        onChange={(event) => setFirstName(event.target.value)}
      />
  </div>
  <div className="mb-3">
    <label htmlFor="lastName" className="join-title-style">
     LAST NAME
    </label>
    <input
        type="text"
        className="input-join-form mx-auto"
        name="lastName"
        required
        autoComplete="off"
        value={lastName}
        placeholder="*last Name"
        onChange={(event) => setLastName(event.target.value)}
      />
  </div>
  <div className="mb-3">
    <label htmlFor="username" className="join-title-style">
      USERNAME
    </label>
    <input
        type="text"
        className="input-join-form mx-auto"
        name="username"
        required
        autoComplete="off"
        value={username}
        placeholder="*username"
        onChange={(event) => setUsername(event.target.value)}
      />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="join-title-style">
      CREATE PASSWORD
    </label>
    <input
        type="password"
        className="input-join-form mx-auto"
        name="password"
        required
        autoComplete="off"
        value={password}
        placeholder="*password"
        onChange={(event) => setPassword(event.target.value)}
      />
  </div>
  <center>
        <button
          type="submit"
          className="reg-join-btn"
        >
          JOIN
        </button>
      </center>
</form>
  );
}

export default RegisterForm;
