import { LayoutType } from "@/types";
import { SettingsAside, Wrapper } from "@/components";
import styles from "./layout.module.css";

export default function SettingsLayout({ children }: LayoutType) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aside}>
        <SettingsAside />
      </div>
      <div className={styles.main}>
        <Wrapper hasBackground padding={24} gap={24}>
          <>{children}</>
        </Wrapper>
      </div>
    </div>
  );
}
