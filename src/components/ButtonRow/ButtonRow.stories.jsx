import ButtonRow from "./ButtonRow.molecule";

export default {
  title: "Components/ButtonRow",
  component: ButtonRow,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    numberOfButtons: 7,
  },
};

export const FiveButtons = {
  args: {
    numberOfButtons: 5,
  },
};

export const ThreeButtons = {
  args: {
    numberOfButtons: 3,
  },
};
