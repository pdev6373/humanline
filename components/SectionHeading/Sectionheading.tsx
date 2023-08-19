import Link from "next/link";
import styles from "./Sectionheading.module.css";
import Image from "next/image";

export default function Sectionheading({
  title,
  body,
  currentRouteText,
  homeRoute,
}: {
  title: string;
  body: string;
  homeRoute: string;
  currentRouteText: string;
}) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>{title}</h3>
      {currentRouteText.length ? (
        <div className={styles.textWrapper}>
          <Link href={homeRoute} className={styles.text}>
            {body}
          </Link>
          <Image
            src="/assets/right.svg"
            alt="right icon"
            width={16}
            height={16}
            className={styles.icon}
          />
          <p className={styles.routeText}>{currentRouteText}</p>
        </div>
      ) : (
        <p className={styles.text}>{body}</p>
      )}
    </div>
  );
}
