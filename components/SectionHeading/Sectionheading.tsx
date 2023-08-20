import Link from "next/link";
import styles from "./Sectionheading.module.css";
import Image from "next/image";
import { SectionHeaderType } from "@/types";

export default function Sectionheading({
  title,
  description,
  currentRouteName,
  homeRoute,
}: SectionHeaderType) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>{title}</h3>
      {title !== currentRouteName ? (
        <div className={styles.textWrapper}>
          <Link href={homeRoute} className={styles.text}>
            {title}
          </Link>
          <Image
            src="/assets/right.svg"
            alt="right icon"
            width={16}
            height={16}
            className={styles.icon}
          />
          <p className={styles.routeText}>{currentRouteName}</p>
        </div>
      ) : (
        <p className={styles.text}>{description}</p>
      )}
    </div>
  );
}
