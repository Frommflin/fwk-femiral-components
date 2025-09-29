import InputField from "./InputField.molecule";

export default {
  title: "Components/InputField",
  component: InputField,
};

export const TextInput = {
  args: {
    inputId: "text1",
    label: "Text Input",
    type: "text",
    onChange: () => console.log("Value has been changed"),
    placeholder: "This is a text input",
    disabled: false,
  },
};

export const PasswordInput = {
  args: {
    inputId: "pwd1",
    label: "Password Input",
    type: "password",
    onChange: () => console.log("Value has been changed"),
    placeholder: "This is a password input",
    disabled: false,
  },
};

export const DisabledTextInput = {
  args: {
    inputId: "text2",
    label: "Disabled Input",
    type: "text",
    onChange: () => {},
    placeholder: "This is a disabled input",
    disabled: true,
  },
};
