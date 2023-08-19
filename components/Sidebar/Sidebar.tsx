"use client";
import { Logo } from "..";
import { useState } from "react";
import { Modes, NavConstant } from "@/constants";
import { ModePropertiesType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [mode, setMode] = useState<ModePropertiesType>(Modes.light);

  const isDarkMode = () => mode.type === "dark";
  const modeHandler = () => setMode(isDarkMode() ? Modes.light : Modes.dark);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Logo />
        <Image src="/assets/expand.svg" alt="expand" width={27} height={16} />
      </div>

      <ul className={styles.linksWrapper}>
        <li>
          <Link href="/" className={styles.dashboardLink}>
            <p className={styles.dashboardText}>Dashboard</p>
            <Image
              src="/assets/dashboard.svg"
              alt="dashboard icon"
              width={24}
              height={24}
            />
          </Link>
        </li>

        <div>
          {NavConstant.map((nav) => (
            <li>
              <Link href={nav.route} className={styles.navLink}>
                {nav.icon && (
                  <Image
                    src={nav.icon}
                    alt="nav icon"
                    width={20}
                    height={20}
                    className={styles.navIcon}
                  />
                )}
                <p className={styles.navName}>{nav.name}</p>
                <Image
                  src="/assets/down.svg"
                  alt="down icon"
                  width={24}
                  height={24}
                  className={styles.down}
                />
              </Link>
            </li>
          ))}
        </div>

        <div className={styles.bottomNav}>
          {/* <div className={styles.bottomNavInner}> */}
          <li>
            <Link href="/help-center" className={styles.navLink}>
              <Image
                src="/assets/question.svg"
                alt="nav icon"
                width={20}
                height={20}
                className={styles.bottomIcon}
              />
              <p className={styles.navName}>Help Center</p>

              {/* <div className={styles.helpTextWrapper}>
                  <p className={styles.helpText}>8</p>
                </div> */}
            </Link>
          </li>

          <li>
            <Link href="/settings" className={styles.navLink}>
              <Image
                src="/assets/settings.svg"
                alt="nav icon"
                width={20}
                height={20}
                className={styles.bottomIcon}
              />
              <p className={styles.navName}>Settings</p>
            </Link>
          </li>
          {/* </div> */}
        </div>
      </ul>

      {/* <div className={styles.modesWrapper}>
        <div
          className={`${styles.currentMode} ${
            isDarkMode() && styles.currentModeDark
          }`}
        ></div>

        <div className={styles.modesContent}>
          <div className={styles.modeWrapper} onClick={modeHandler}>
            <Image
              src="/assets/sun.svg"
              alt="sun icon"
              width={16}
              height={16}
              className={!isDarkMode() ? styles.modeIcon : ""}
            />
            <p
              className={`${styles.modeText} ${
                !isDarkMode() && styles.modeTextCurrent
              }`}
            >
              Light
            </p>
          </div>

          <div className={styles.modeWrapper} onClick={modeHandler}>
            <Image
              src="/assets/moon.svg"
              alt="moon icon"
              width={16}
              height={16}
              className={isDarkMode() ? styles.modeIcon : ""}
            />
            <p
              className={`${styles.modeText} ${
                isDarkMode() && styles.modeTextCurrent
              }`}
            >
              Dark
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
