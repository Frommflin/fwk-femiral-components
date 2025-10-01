
import React, { useState } from 'react';
import RegisterForm from './RegisterForm.organism';

export default {
  title: "Components/RegisterForm",
  component: RegisterForm,
};

export const Placeholder = () => <RegisterForm showPlaceholder />;

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
