import Image from "next/image";
import styles from "./LineBackground.module.css";
import { LineBackgroundType } from "@/types";
import Footer from "../Footer/Footer";

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

      {hasFooter && <Footer />}
    </div>
  );
}
