import { HelpCenterList } from "@/constants";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function HelpCenter() {
  return (
    <div className={styles.wrapper}>
      {HelpCenterList.map((help) => (
        <Link href={help.route} className={styles.helpWrapper}>
          <div className={styles.iconWrapper}>
            <Image
              src={help.icon}
              alt="help center icon"
              width={20}
              height={20}
              className={styles.icon}
            />
          </div>

          <h2 className={styles.title}>{help.title}</h2>
          <p className={styles.body}>{help.body}</p>
        </Link>
      ))}
    </div>
  );
}
