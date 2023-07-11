import { ButtonType } from "@/types";
import styles from "./Button.module.css";

export default function Button({
  onClick,
  children,
  isDisabled = false,
  type = "primary",
}: ButtonType) {
  return (
    <button
      disabled={isDisabled}
      onClick={!isDisabled && onClick}
      className={type === "primary" ? styles.button : styles.buttonSecondary}
    >
      {children}
    </button>
  );
}
