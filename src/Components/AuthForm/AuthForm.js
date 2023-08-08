import React, { useState, useReducer, useEffect } from 'react';
import InputField from './InputField';

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

const AuthForm = ({ onSubmit, buttonText, fieldConfigs }) => {
  const initialFormData = fieldConfigs.reduce((acc, config) => {
    acc[config.name] = config.type === 'number' ? 0 : '';
    return acc;
  }, {});

  const [formData, dispatch] = useReducer(formReducer, initialFormData);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const isFormValid = fieldConfigs.every(config =>
      formData[config.name].trim() !== '' || config.type === 'number'
    );

    setFormIsValid(isFormValid);
  }, [formData, fieldConfigs]);

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
    onSubmit(formData);
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
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
