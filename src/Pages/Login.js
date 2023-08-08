import React from 'react';
import AuthForm from '../Components/AuthForm/AuthForm';

const loginFieldConfigs = [
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Password', name: 'password', type: 'password' },
];

const Login = () => {
  const handleLogin = (formData) => {
    // Handle login logic here
    console.log('Login form submitted:', formData);
  };

  return (
    <div>
      <h2>Log In</h2>
      <AuthForm
        onSubmit={handleLogin}
        buttonText="Log In"
        fieldConfigs={loginFieldConfigs}
      />
    </div>
  );
};

export default Login;
