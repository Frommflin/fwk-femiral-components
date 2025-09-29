import React from "react";
import styles from "./InputField.module.css";
import Label from "../Label/Label.atom";
import Input from "../Input/Input.atom";

const InputField = ({
  inputId,
  label,
  labelClasses,
  type,
  value,
  onChange,
  placeholder,
  disabled,
  inputClasses,
}) => {
  return (
    <>
      <Label htmlFor={inputId} text={label} className={labelClasses} />
      <Input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
      />
    </>
  );
};

export default InputField;
