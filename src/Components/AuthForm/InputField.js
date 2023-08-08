import React from 'react';

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

export default InputField;
