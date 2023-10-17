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
<form className="formPanel join-form" onSubmit={registerUser}>
  {errors.registrationMessage && (
    <h3 className="alert" role="alert">
      {errors.registrationMessage}
    </h3>
  )}
  <div className="mb-3">
    <label htmlFor="firstName" className="username-title-join">
      First Name:
      <input
        type="text"
        className="form-control username-input mx-auto"
        name="firstName"
        required
        autoComplete="off"
        value={firstName}
        placeholder="First Name"
        onChange={(event) => setFirstName(event.target.value)}
      />
    </label>
  </div>
  <div className="mb-3">
    <label htmlFor="lastName" className="username-title-join">
      Last Name:
      <input
        type="text"
        className="form-control username-input mx-auto"
        name="lastName"
        required
        autoComplete="off"
        value={lastName}
        placeholder="Last Name"
        onChange={(event) => setLastName(event.target.value)}
      />
    </label>
  </div>
  <div className="mb-3">
    <label htmlFor="username" className="username-title-join">
      Username:
      <input
        type="text"
        className="form-control username-input mx-auto"
        name="username"
        required
        autoComplete="off"
        value={username}
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
    </label>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="password-title-join">
      Password:
      <input
        type="password"
        className="form-control password-input mx-auto"
        name="password"
        required
        autoComplete="off"
        value={password}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
    </label>
  </div>
</form>
  );
}

export default RegisterForm;
