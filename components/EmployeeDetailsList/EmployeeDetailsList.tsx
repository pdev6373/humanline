import Image from "next/image";
import styles from "./EmployeeDetailsList.module.css";
import { EmployeeDetailsListType } from "@/types";

export default function EmployeeDetailsList({ info }: EmployeeDetailsListType) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.header}>{info.type}</h3>
        <Image src="/assets/edit.svg" alt="edit icon" width={24} height={24} />
      </div>

      <div className="line"></div>

      <div
        className={[
          styles.contentWrapper,
          (info.type.toLowerCase() === "address" ||
            info.type.toLowerCase() === "employment information" ||
            info.type.toLowerCase() === "emergency contact") &&
            styles.contentWrapperColumn,
        ].join(" ")}
      >
        {info.content.map((content, index) => (
          <div className={styles.content} key={index}>
            <p
              className={[
                styles.contentTitle,
                info.type.toLowerCase() === "work schedule" &&
                  styles.contentTitleWide,
              ].join(" ")}
            >
              {content.title}
            </p>
            <p className={styles.contentValue}>
              {typeof content.value !== "object" && content.value?.length
                ? content.value
                : "-"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
