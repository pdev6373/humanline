import { ModeType } from "@/types";

export const Modes: ModeType = {
  light: {
    type: "light",
    image: "/assets/sun.svg",
    text: "Light",
  },

  dark: {
    type: "dark",
    image: "/assets/moon.svg",
    text: "Dark",
  },
};

export default Modes;
