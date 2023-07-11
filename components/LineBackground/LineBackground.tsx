import Image from "next/image";
import styles from "./LineBackground.module.css";
import { LineBackgroundType } from "@/types";

export default function LineBackground({
  children,
  hasFooter = true,
}: LineBackgroundType) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundWrapper}>
        <Image
          src="/assets/success-background.png"
          alt="background"
          width={1440}
          height={1023}
          className={styles.background}
        />
      </div>

      <main className={styles.innerWrapper}>{children}</main>

      {hasFooter && (
        <footer className={styles.footer}>
          <p className={styles.copyRight}>
            © 2023 Humanline . Alrights reserved.
          </p>
          <p className={styles.terms}>Terms & Conditions</p>
          <p className={styles.policy}>Privacy Policy</p>
        </footer>
      )}
    </div>
  );
}
