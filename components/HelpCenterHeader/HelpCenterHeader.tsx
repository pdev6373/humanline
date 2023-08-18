import Image from "next/image";
import styles from "./HelpCenterHeader.module.css";

export default function HelpCenterHeader({ children }: { children: string }) {
  return (
    <div className={styles.headerWrapper}>
      <h2 className={styles.header}>{children}</h2>
      <Image src="/assets/info.svg" alt="info icon" width={18} height={18} />
    </div>
  );
}
