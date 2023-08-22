import { ButtonType } from "@/types";
import styles from "./Button.module.css";
import Image from "next/image";

export default function Button({
  onClick,
  children,
  isDisabled = false,
  type = "primary",
  icon,
}: ButtonType) {
  return (
    <button
      disabled={isDisabled}
      onClick={!isDisabled && onClick}
      className={[
        styles.button,
        type === "primary" && styles.buttonPrimary,
        type === "secondary" && styles.buttonSecondary,
        type === "primary-small" && styles.buttonPrimarySmall,
        type === "primary-small-dark" && styles.buttonPrimarySmallDark,
      ].join(" ")}
    >
      {icon && (
        <Image
          src={`/assets/${icon}`}
          alt="button icon"
          width={20}
          height={20}
          className={styles.buttonIcon}
        />
      )}
      {children}
    </button>
  );
}
