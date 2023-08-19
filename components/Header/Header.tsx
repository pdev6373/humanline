import { HeaderNavs } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Search from "../Search/Search";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Search placeholder="Search anything…" type="header" />

      <ul className={styles.navs}>
        {HeaderNavs.map((nav) => (
          <li>
            <Link href={nav.route} className={styles.nav}>
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.sideNavs}>
        <div className={styles.sideNavWrapper}>
          <Image
            src="/assets/mail.svg"
            alt="mail"
            width={24}
            height={24}
            className={styles.headerIcon}
          />
          <div className={styles.notification}></div>
        </div>

        <div className={styles.sideNavWrapper}>
          <Image
            src="/assets/message.svg"
            alt="message"
            width={24}
            height={24}
            className={styles.headerIcon}
          />
          <div className={styles.notification}></div>
        </div>

        <div className={styles.profile}>
          <Image
            src="/assets/profile.png"
            alt="profile image"
            width={32}
            height={32}
          />
          <Image
            src="/assets/down.svg"
            alt="down"
            width={14}
            height={14}
            className={styles.headerIcon}
          />
        </div>
      </div>
    </header>
  );
}
