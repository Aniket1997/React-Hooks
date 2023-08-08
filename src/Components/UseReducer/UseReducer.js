import React, { useState,useReducer, useEffect } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const InputField = ({ label, name, value, type, onChange }) => (
  <div>
    <label>{label}:</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

const fieldConfigs = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Age', name: 'age', type: 'number' },
  { label: 'Address', name: 'address', type: 'text' },
  { label: 'City', name: 'city', type: 'text' },
  { label: 'Zip Code', name: 'zipCode', type: 'text' }, // Use type 'text' for zipCode
  // Add more field configurations as needed
];

const UseReducer = () => {
  const [formData, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    age: 0,
    address: '',
    city: '',
    zipCode: '',
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const isFormValid =
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.age > 0 &&
      formData.address.trim() !== '' &&
      formData.city.trim() !== '' &&
      /^\d+$/.test(formData.zipCode); // Validate zipCode as numeric

    setFormIsValid(isFormValid);
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    dispatch({
      type: 'UPDATE_FIELD',
      field: name,
      value: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!', formData);
  };

  const inputFields = fieldConfigs.map((config) => (
    <InputField
      key={config.name}
      label={config.label}
      name={config.name}
      type={config.type}
      value={formData[config.name]}
      onChange={handleInputChange}
    />
  ));

  return (
    <form onSubmit={handleSubmit}>
      {inputFields}
      <button type="submit" disabled={!formIsValid}>
        Submit
      </button>
    </form>
  );
};

export default UseReducer;
