import React from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LoginView.css';

export default function LoginView(props) {

  function handleSubmitJwtAuth(event) {
    event.preventDefault();

    const { email, password } = event.target;

    AuthApiService.postLogin({
      username: email.value,
      password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.user_id);
        this.context.saveNickname(res.username);
        this.context.handleLoginState(true);
        this.props.history.push("/");
      })
      .catch((res) => {
        this.setState({ error: res.error, loading: false });
      });
  };

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

