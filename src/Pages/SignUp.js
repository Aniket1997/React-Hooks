import React from 'react';
import AuthForm from '../Components/AuthForm/AuthForm';

const signupFieldConfigs = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Age', name: 'age', type: 'number' },
  { label: 'Address', name: 'address', type: 'text' },
  { label: 'City', name: 'city', type: 'text' },
  { label: 'Zip Code', name: 'zipCode', type: 'text' },
];

const SignUp = () => {
  const handleSignup = (formData) => {
    // Handle signup logic here
    console.log('Signup form submitted:', formData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm
        onSubmit={handleSignup}
        buttonText="Sign Up"
        fieldConfigs={signupFieldConfigs}
      />
    </div>
  );
};

export default SignUp;
