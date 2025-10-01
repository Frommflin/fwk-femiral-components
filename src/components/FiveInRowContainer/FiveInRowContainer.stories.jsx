import FiveInRowContainer from "./FiveInRowContainer";

export default {
  title: "Components/FiveInRowContainer",
  component: FiveInRowContainer,
};

export const Default = {
  args: {
    numberOfButtons: 5,
    size: 7,
    coloredCells: [
      { row: 6, col: 1, color: "red" },
      { row: 6, col: 6, color: "yellow" },
      { row: 5, col: 5, color: "yellow" },
      { row: 4, col: 4, color: "yellow" },
      { row: 5, col: 6, color: "red" },
    ],
    onClick: (index) => alert(`Button ${index} clicked`),
  },
};
