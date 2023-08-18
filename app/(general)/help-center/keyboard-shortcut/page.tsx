import { HelpCenterHeader } from "@/components";
import styles from "./page.module.css";
import { KeyboardShortcuts } from "@/constants";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <HelpCenterHeader>Keyboard Shortcut For Humanline</HelpCenterHeader>

      <div className={styles.shortcuts}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.header}>
            A list of Keyboard Shortcuts to help you navigate Humanline quicker
          </h2>
          <p className={styles.text}>
            Here are {KeyboardShortcuts.shortcuts.length} Keyboard shortcuts
            that you can use on Grove HR to save your time.
          </p>
        </div>

        <table>
          <thead className={styles.tableHead}>
            <tr>
              {KeyboardShortcuts.shortcuts.map((shortcut) => (
                // <div className={styles.tableHeadTextWrapper}>
                <th className={styles.tableHeadText}>{shortcut.header}</th>
                //   <Image
                //     src="/assets/sort.svg"
                //     alt="sort icon"
                //     width={14}
                //     height={14}
                //   />
                // </div>
              ))}

              {/* <div className={styles.tableHeadTextWrapper}> */}
              <th className={styles.tableHeadText}>Header title</th>
              {/* <Image
                  src="/assets/sort.svg"
                  alt="sort icon"
                  width={14}
                  height={14}
                /> */}
              {/* </div> */}
            </tr>
          </thead>

          <tbody>
            <tr>
              {KeyboardShortcuts.shortcuts.map((shortcut) =>
                shortcut.body.map((body) => (
                  <th className={styles.tableHeadText}>{body.shortcut}</th>
                ))
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
