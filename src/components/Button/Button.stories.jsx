import { Button } from "./Button";

const meta = {
  title: "Core/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};
export default meta;

export const Primary = { args: { label: "Button" } };
export const Disabled = { args: { label: "Disabled", disabled: true } };
