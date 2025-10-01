import React from "react";
import LoginForm from "./LoginForm.organism";

export default {
  title: "Components/LoginForm",
  component: LoginForm,
};

export const Default = () => {
  const onSubmit = (user) => {
    alert(`Username: ${user.username}, Password: ${user.password} `);
  };

  return <LoginForm onSubmit={onSubmit} />;
};
