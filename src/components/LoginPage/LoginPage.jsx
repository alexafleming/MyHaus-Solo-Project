import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="join_btn_styled"
          onClick={() => {
            history.push('/registration');
          }}
        >
          JOIN NOW
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
