import React, { useState } from 'react';
import Layout from '../components/Layout';
import { onRegistration } from '../api/auth';
import '../styles/Register.css';

const Register = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await onRegistration(values);

      setError('');
      setSuccess(data.message);
      setValues({ email: '', password: '' });
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
      setSuccess('');
    }
  };

  return (
    <Layout>
      <div className="register-section">
        <form onSubmit={onSubmit} className="register-form">
          <h1 className="register-title">Register</h1>

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
          <div className="success-message">{success}</div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
