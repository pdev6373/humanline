"use client";
import { usePathname } from "next/navigation";
import { SettingsNav } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import styles from "./SettingsAside.module.css";

export default function SettingsAside() {
  const pathname = usePathname();

  return (
    <aside className={styles.aside}>
      {SettingsNav.map((settings) => (
        <Link
          href={settings.route}
          className={[
            styles.asideLink,
            pathname === settings.route && styles.asideLinkCurrent,
          ].join(" ")}
        >
          {settings.icon && (
            <Image
              src={settings.icon}
              alt="settings icon"
              width={20}
              height={20}
              className={styles.asideIcon}
            />
          )}
          <p className={styles.asideLinkText}>{settings.name}</p>
        </Link>
      ))}
    </aside>
  );
}
