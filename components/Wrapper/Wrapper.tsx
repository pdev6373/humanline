import { WrapperType } from "@/types";
import styles from "./Wrapper.module.css";

export default function Wrapper({ children }: WrapperType) {
  return <main className={styles.wrapper}>{children}</main>;
}
