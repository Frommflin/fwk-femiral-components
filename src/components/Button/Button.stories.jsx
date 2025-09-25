import Button from './Button.atom'

export default {
    title: "Components/Button",
    component: Button,
}

export const Default = {}
export const ButtonWithText = {
    args: {
        label: "Button",
        onClick: () => alert("Klick")
    }
}
