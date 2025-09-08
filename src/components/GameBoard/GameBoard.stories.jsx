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
