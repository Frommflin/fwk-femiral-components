import React, { useState } from "react";
import Register from "./Register.molecule";

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

  return (
    <Register
      username={formData.username}
      password={formData.password}
      onChange={handleChange}
    />
  );
};
