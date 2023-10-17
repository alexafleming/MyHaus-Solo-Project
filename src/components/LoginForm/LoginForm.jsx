import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import './LoginForm.css'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="login-form" onSubmit={login}>
      <p className="username-title">USERNAME</p>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          <input type="text"
            className="username-input mx-auto"
            name="username"
            required
            autoComplete='off'
            value={username}
            placeholder='*username'
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
      <p className="password-title">PASSWORD</p>
        <label htmlFor="password">
          <input
          className="password-input"
            type="password"
            name="password"
            required
            autoComplete='off'
            value={password}
            placeholder='*password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
