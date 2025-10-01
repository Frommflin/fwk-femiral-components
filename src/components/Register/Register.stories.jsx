
import React, { useState } from 'react';
import Register from './Register.organism';
import RegisterForm from './Register.organism';

export default {
  title: "Components/Register",
  component: Register,
};

export const Placeholder = () => <Register showPlaceholder />;

export const Default = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = ({ name, value }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert(`Username: ${formData.username}, Password: ${formData.password}`);
  };

  return (
    <RegisterForm
      username={formData.username}
      password={formData.password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
