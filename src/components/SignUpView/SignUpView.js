import React from 'react';
import './SignUpView.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

export default function SignUpView(props) {

  return (
    <form>
      <div className="sign-up-form">
        <h1>Welcome to a training notebook!</h1>
        <p>Please fill in this form to create an account.</p>
        <section className="form-section">
          <label className="input-title" htmlFor="email"><b>What's your email?</b></label>
          <input className="underline-input" type="text" name="email" required />
        </section>
        <section className="form-section">
          <label className="input-title" htmlFor="password"><b>Password</b></label>
          <input className="underline-input" type="password" name="password" required />
        </section>
        <section className="form-section">
          <label className="input-title" htmlFor="password-repeat"><b>Confirm</b></label>
          <input className="underline-input" type="password" name="password-repeat" required />
        </section>
        <p>By creating an account you agree to our <a href="#">Terms Privacy</a>.</p>
        <section>
          <Link to='/landing'>
            <button
              type="button"
              className="unlit-button"
            >Cancel
            </button>
          </Link>
          <button type="submit" className="lit-button">Continue</button>
        </section>
      </div>
    </form>
  );
}

