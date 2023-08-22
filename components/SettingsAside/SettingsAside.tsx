"use client";
import { usePathname } from "next/navigation";
import { SettingsNav } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import styles from "./SettingsAside.module.css";
import { Wrapper } from "..";

export default function SettingsAside() {
  const pathname = usePathname();

  return (
    <Wrapper hasBackground padding={24} gap={16}>
      <>
        {SettingsNav.map((settings) => (
          <Link
            key={settings.name}
            href={settings.route}
            className={[
              styles.link,
              pathname === settings.route && styles.linkCurrent,
            ].join(" ")}
          >
            {settings.icon && (
              <Image
                src={settings.icon}
                alt="settings icon"
                width={20}
                height={20}
                className={[
                  styles.icon,
                  pathname === settings.route && styles.iconCurrent,
                ].join(" ")}
              />
            )}
            <p className={styles.linkText}>{settings.name}</p>
          </Link>
        ))}
      </>
    </Wrapper>
  );
}
