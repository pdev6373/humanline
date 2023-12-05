import { TextsType } from "@/types";
import styles from "./Text.module.css";

export default function Text({
  children,
  type,
  size,
  variation,
  weight,
  letterSpacing,
}: TextsType) {
  const textStyles = [
    size === 12 && styles.text12,
    size === 14 && styles.text14,
    size === 20 && styles.text20,
    variation === "light" ? styles.textLight : styles.textDark,
    weight === "400" && styles.text400,
    weight === "500" && styles.text500,
    weight === "600" && styles.text600,
    weight === "700" && styles.text700,
    letterSpacing === 0.2 && styles.letterSpacing02,
    letterSpacing === 0.3 && styles.letterSpacing03,
  ].join(" ");

  return type === "heading" ? (
    <h3 className={textStyles}>{children}</h3>
  ) : (
    <p className={textStyles}>{children}</p>
  );
}
