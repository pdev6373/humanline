import { ChipType } from "@/types";
import styles from "./Chip.module.css";

export default function Chip({ children }: ChipType) {
  return <div className={styles.chip}>{children}</div>;
}
