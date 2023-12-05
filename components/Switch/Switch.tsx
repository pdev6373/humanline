import { SwitchType } from "@/types";
import styles from "./Switch.module.css";
import Image from "next/image";

export default function Switch({ isActive, onClick }: SwitchType) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={[styles.switch, isActive && styles.switchOn].join(" ")}>
        <div className={styles.switchLight} />
        <Image
          src={isActive ? "/assets/mark.svg" : "/assets/unmark.svg"}
          alt="switch icon"
          width={22}
          height={22}
          className={styles.switchIcon}
        />
        <div className={styles.switchDark} />
      </div>
    </div>
  );
}
