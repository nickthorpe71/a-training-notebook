import React from 'react';
import './LoginView.css';

export default function LoginView(props) {
  return (
    <form>
      <div class="login-form">
        <h1>Sign in</h1>
        <section class="form-section">
          <label class="input-title" for="email"><b>Email</b></label>
          <input class="underline-input" type="text" name="email" required />
        </section>
        <section class="form-section">
          <label class="input-title" for="password"><b>Password</b></label>
          <input class="underline-input" type="password" name="password" required />
        </section>
        <section>
          <button type="button" class="unlit-button">Cancel</button>
          <button type="submit" class="lit-button">Login</button>
        </section>
      </div>
    </form>
  );
}

