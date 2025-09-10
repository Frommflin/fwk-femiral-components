import GameBoard from "./GameBoard";

export default {
  title: "components/GameBoard",
  component: GameBoard,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    size: 7,
  },
};

export const oneredcoinboard = {
  args: {
    size: 7,
    coloredCells: [{ i: 43, color: "red" }],
  },
};

export const oneyellowcoinboard = {
  args: {
    size: 7,
    coloredCells: [{ i: 48, color: "yellow" }],
  },
};

export const boardwithcoins = {
  args: {
    size: 7,
    coloredCells: [
      { i: 43, color: "red" },
      { i: 48, color: "yellow" },
      { i: 41, color: "yellow" },
      { i: 34, color: "yellow" },
      { i: 44, color: "red" },
    ],
  },
};
