import { EmployeeHeader, Wrapper } from "@/components";
import Image from "next/image";
import styles from "./layout.module.css";
import { Employee } from "@/constants";

export default function HelpCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.headerWrapper}>
            <h3 className={styles.header}>Help Center</h3>
            <p className={styles.text}>What can we help you with?</p>
          </div>

          <div className={styles.searchWrapper}>
            <input
              placeholder="Search what you need"
              className={styles.search}
            />
            <Image
              src="/assets/search.svg"
              alt="search icon"
              width={20}
              height={20}
            />
          </div>
        </div>

        {children}
      </div>
    </Wrapper>
  );
}
