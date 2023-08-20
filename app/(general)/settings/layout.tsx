import { LayoutType } from "@/types";
import { SettingsAside } from "@/components";
import styles from "./layout.module.css";

export default function SettingsLayout({ children }: LayoutType) {
  return (
    <div className={styles.wrapper}>
      <SettingsAside />
      <section className={styles.main}>{children}</section>
    </div>
  );
}
