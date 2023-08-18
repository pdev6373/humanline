import { SectionHeader, Wrapper } from "@/components";
import styles from "./layout.module.css";

export default function HelpCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <SectionHeader title="Help Center" body="What can we help you with?" />
        {children}
      </div>
    </Wrapper>
  );
}
