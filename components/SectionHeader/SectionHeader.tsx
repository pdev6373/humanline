import Image from "next/image";
import styles from "./SectionHeader.module.css";
import { SectionHeaderType } from "@/types";

export default function SectionHeader({ title, body }: SectionHeaderType) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.header}>{title}</h3>
        <p className={styles.text}>{body}</p>
      </div>

      <div className={styles.searchWrapper}>
        <input placeholder="Search what you need" className={styles.search} />
        <Image
          src="/assets/search.svg"
          alt="search icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
