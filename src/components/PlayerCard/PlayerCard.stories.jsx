import PlayerCard from "./PlayerCard.atom";

export default {
  title: "Components/PlayerCard",
  component: PlayerCard,
};

export const Default = {};

export const YellowPlayerNamed = {
  args: {
    i: 1,
    user: "Username",
    color: "yellow",
  },
};
export const RedPlayerNamed = {
  args: {
    i: 1,
    user: "Username",
    color: "red",
  },
};
