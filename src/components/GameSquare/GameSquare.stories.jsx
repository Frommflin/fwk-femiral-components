import GameSquare from "./GameSquare.molecule"

export default {
    title: "Components/GameSquare",
    component: GameSquare,
}

export const Default = {}

export const RedPlayed = {
    args: {
        playedColor: 'red'
    }
}

export const YellowPlayed = {
    args: {
        playedColor: 'yellow'
    }
}
