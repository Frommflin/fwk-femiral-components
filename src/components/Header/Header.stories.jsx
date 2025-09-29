import React from "react";
import Header from "./Header.organism";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const FourPageMenu = {
  args: {
    title: "Fyra I Rad",
    navLinks: [
      { name: "Home", path: "" },
      { name: "Game", path: "play" },
      { name: "Register", path: "register" },
      { name: "Sign In", path: "signin" },
    ],
  },
};

export const TwoPageMenu = {
  args: {
    title: "Title",
    navLinks: [
      { name: "Home", path: "start" },
      { name: "About Us", path: "about" },
    ],
  },
};
