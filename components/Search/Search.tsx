import Image from "next/image";
import styles from "./Search.module.css";

export default function Search({
  placeholder,
  type = "section",
}: {
  placeholder: string;
  type: "header" | "section";
}) {
  return type === "section" ? (
    <div className={styles.searchWrapper}>
      <input placeholder={placeholder} className={styles.search} />
      <Image
        src="/assets/search.svg"
        alt="search icon"
        width={20}
        height={20}
      />
    </div>
  ) : (
    <div className={styles.headerSeachWrapper}>
      <Image
        src="/assets/search.svg"
        alt="search icon"
        width={20}
        height={20}
      />

      <input placeholder={placeholder} className={styles.headerSearch} />

      <div className={styles.command}>
        <div className={styles.commandInner}>
          <Image
            src="/assets/command.svg"
            alt="command icon"
            width={12}
            height={12}
          />
          <p className={styles.commandText}>F</p>
        </div>
      </div>
    </div>
  );
}
