import Icon from "../../components/Icon";
import { useState } from 'react';
import { useLoginMutation, useGetUserProfileMutation } from '../../API/api';
import { useDispatch } from "react-redux";
import { setUser } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

  // Form field states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginMutation, { isLoading, isError }] = useLoginMutation();
  const [getUserProfile] = useGetUserProfileMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Submit form event
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };

    try {
      // Login endpoint
      const response = await loginMutation(credentials);
      const token = response.data.body.token;
      // Adding the retrieved token to the session storage memory
      sessionStorage.setItem('authToken', token);
      const userProfile = await getUserProfile(`Bearer ${token}`);
      // Dispatch and fill the user profile data state
      dispatch(setUser(userProfile));
      // Redirects the user to the user component
      navigate("/user");

    } catch (err) {
      console.error('Failed to connect');
      // Reset the values of the form fields
      setEmail('');
      setPassword('');
    }
  }

  return (
    <main className="main bg-dark">
      <div className="Login">
          <section className="sign-in-content">
            <Icon iconClass="fa fa-user-circle sign-in-icon"/>
            <h1>Sign In</h1>
            <form>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-remember">
                <label htmlFor="remember-me">Remember me</label>
                <input id="remember-me" type="checkbox"/>
              </div>
              <button className="sign-in-button" onClick={handleSubmit}>
                {isLoading ? "Loading now" : "Sign In"}
              </button>
              {isError ? <p>Identifant ou mot de passe erroné</p> : ""}
            </form>
          </section>
      </div>
    </main>
  );
}

export default Login;