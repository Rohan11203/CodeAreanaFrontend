import React, { useState } from 'react';
import Layout from '../components/Layout';
import { OnLogin } from '../api/auth';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../redux/slices/authSlices';
import '../styles/Login.css';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await OnLogin(values);
      dispatch(authenticateUser());

      localStorage.setItem('isAuth', 'true');
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <>
    <Layout>
      
      <div className="login-section">
        <form onSubmit={onSubmit} className="login-form">
          <h1 className="login-title">Login</h1>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              onChange={onChange}
              type="email"
              className="form-input"
              id="email"
              name="email"
              value={values.email}
              placeholder="test@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={onChange}
              type="password"
              value={values.password}
              className="form-input"
              id="password"
              name="password"
              placeholder="password"
              required
            />
          </div>

          <div className="error-message">{error}</div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
    </>
  );
};

export default Login;
