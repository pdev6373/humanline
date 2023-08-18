import Image from "next/image";
import styles from "./EmployeeDetailsTable.module.css";

import { EmployeeDetailsListType } from "@/types";

export default function EmployeeDetailsTable({
  info,
}: EmployeeDetailsListType) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.header}>{info.type}</h3>
        <Image
          src="/assets/plus.svg"
          alt="edit icon"
          width={24}
          height={24}
          className={styles.add}
        />
      </div>

      <div className={styles.main}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              {info.content.map((content) => (
                <th className={styles.tableHeadText}>{content.title}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              {info.content.map(
                (content) =>
                  typeof content.value === "string" && (
                    <td className={styles.tableHeadText}>
                      {content.value.length ? content.value : "-"}
                    </td>
                  )
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
