import Image from "next/image";
import React from "react";
import styles from "./HeaderSearch.module.css";

export default function HeaderSearch() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/search.svg"
        alt="search icon"
        width={20}
        height={20}
      />

      <input placeholder="Search anything…" className={styles.search} />

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
