import React, { useState } from 'react';
import Register from './Register';

export default {
  title: 'Components/Register',
  component: Register,
};

export const Default = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = ({ name, value }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register form submitted:', formData);
  };

  return (
    <Register
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
