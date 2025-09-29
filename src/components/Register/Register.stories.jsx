<<<<<<< HEAD
import React, { useState } from "react";
import Register from "./Register.molecule";
=======
import React, { useState } from 'react';
import Register from './Register.organism';
>>>>>>> b29b5c1 (changed the register.molocule to organism, imported button component and modfied register.stories.jsx accorging that)

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
    <Register
      username={formData.username}
      password={formData.password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
