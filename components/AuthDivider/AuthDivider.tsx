import { AuthDividerProps } from "@/types";
import styles from "./AuthDivider.module.css";

export default function AuthDivider({ text }: AuthDividerProps) {
  return <p className={styles.authDivider}>{text}</p>;
}
