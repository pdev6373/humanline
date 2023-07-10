import { ButtonType } from "@/types";
import styles from "./Button.module.css";

export default function Button({
  onClick,
  children,
  isDisabled = false,
}: ButtonType) {
  return (
    <button
      disabled={isDisabled}
      onClick={!isDisabled && onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
}
