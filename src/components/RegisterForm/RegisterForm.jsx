import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css'

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

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
    <label htmlFor="firstName" className="join-form-style">
      FIRST NAME
      <input
        type="text"
        className="form-control input-join-form mx-auto"
        name="firstName"
        required
        autoComplete="off"
        value={firstName}
        placeholder="*first name"
        onChange={(event) => setFirstName(event.target.value)}
      />
    </label>
  </div>
  <div className="mb-3">
    <label htmlFor="lastName" className="join-form-style">
     LAST NAME
      <input
        type="text"
        className="form-control input-join-form mx-auto"
        name="lastName"
        required
        autoComplete="off"
        value={lastName}
        placeholder="*last Name"
        onChange={(event) => setLastName(event.target.value)}
      />
    </label>
  </div>
  <div className="mb-3">
    <label htmlFor="username" className="join-form-style">
      USERNAME
      <input
        type="text"
        className="form-control input-join-form mx-auto"
        name="username"
        required
        autoComplete="off"
        value={username}
        placeholder="*username"
        onChange={(event) => setUsername(event.target.value)}
      />
    </label>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="join-form-style">
      CREATE PASSWORD
      <input
        type="password"
        className="form-control input-join-form mx-auto"
        name="password"
        required
        autoComplete="off"
        value={password}
        placeholder="*password"
        onChange={(event) => setPassword(event.target.value)}
      />
    </label>
  </div>
  <center>
        <button
          type="button"
          className="btn reg-join-btn"
          onClick={() => {
            history.push('/login');
          }}
        >
          JOIN
        </button>
      </center>
</form>
  );
}

export default RegisterForm;
