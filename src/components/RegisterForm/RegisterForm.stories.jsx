import React from "react";
import RegisterForm from "./RegisterForm.organism";

export default {
  title: "Components/RegisterForm",
  component: RegisterForm,
};

export const Default = () => {
  const onSubmit = (user) => {
    alert(`Username: ${user.username}, Password: ${user.password} `);
  };

  return <RegisterForm onSubmit={onSubmit} />;
};
