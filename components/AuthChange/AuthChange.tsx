import { AuthChangeType } from "@/types";
import Link from "next/link";
import styles from "./AuthChange.module.css";

export default function AuthChange({ href, text, action }: AuthChangeType) {
  return (
    <p className={styles.authChange}>
      {text}{" "}
      <Link href={href} className={styles.authChangeLink}>
        {action}
      </Link>
    </p>
  );
}
