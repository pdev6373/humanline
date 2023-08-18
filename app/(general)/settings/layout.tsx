import { SectionHeader, SettingsAside, Wrapper } from "@/components";
import styles from "./layout.module.css";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <SectionHeader title="Settings" body="Manage your dashboard here" />

        <div className={styles.sectionWrapper}>
          <SettingsAside />
          <section className={styles.main}>{children}</section>
        </div>
      </div>
    </Wrapper>
  );
}
