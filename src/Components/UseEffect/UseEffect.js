import React, { useState, useEffect } from 'react';

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 0,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const isFormValid =
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.age > 0;

    setFormIsValid(isFormValid);
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </div>

      {/* Add other form fields as needed */}

      <button type="submit" disabled={!formIsValid}>
        Submit
      </button>
    </form>
  );
};

export default YourFormComponent;
