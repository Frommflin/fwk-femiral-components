import React, { useState, useEffect } from "react";
import Login from "./Login.organism";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: {
    username: { control: "text" },
    password: { control: "text" },
    onChange: { action: "changed" },
    onSubmit: { action: "submitted" },
  },
};

const Template = (args) => {
  const [formData, setFormData] = useState({
    username: args.username || "",
    password: args.password || "",
  });

  useEffect(() => {
    setFormData({ username: args.username, password: args.password });
  }, [args.username, args.password]);

  const handleChange = ({ name, value }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (args.onChange) args.onChange({ name, value });
  };

  const handleSubmit = () => {
    alert(`Username: ${formData.username}, Password: ${formData.password}`);
    if (args.onSubmit) args.onSubmit(formData);
  };

  return (
    <Login
      {...args}
      username={formData.username}
      password={formData.password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  username: "testuser1",
  password: "testpassword",
};
