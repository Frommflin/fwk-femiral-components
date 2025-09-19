import GameBoard2 from "./GameBoard2.organism";

export default {
  title: "Components/GameBoard2",
  component: GameBoard2,
};

export const Default = {
  args: {
    size: 7,
  },
};

export const oneredcoinboard = {
  args: {
    size: 7,
    coloredCells: [{ row: 6, col: 1, color: "red" }],
  },
};

export const oneyellowcoinboard = {
  args: {
    size: 7,
    coloredCells: [{ row: 6, col: 1, color: "yellow" }],
  },
};

export const boardwithcoins = {
  args: {
    size: 7,
    coloredCells: [
      { row: 6, col: 1, color: "red" },
      { row: 6, col: 6, color: "yellow" },
      { row: 5, col: 5, color: "yellow" },
      { row: 4, col: 4, color: "yellow" },
      { row: 5, col: 6, color: "red" },
    ],
  },
};
