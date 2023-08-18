import { Employee as EmployeeConstant } from "@/constants";
import { EmployeeDetailsList } from "@/components";
import styles from "./page.module.css";

export default function Employee() {
  return (
    <div className={styles.wrapper}>
      {EmployeeConstant.nav
        .find((nav) => nav.name === "General")!
        .body.map((info) => (
          <EmployeeDetailsList info={info} />
        ))}
    </div>
  );
}
