import { Fragment } from "react";
import { Employee as EmployeeConstant } from "@/constants";
import { EmployeeDetailsList } from "@/components";
import styles from "./page.module.css";

export default function Employee() {
  return (
    <div className={styles.wrapper}>
      {EmployeeConstant.nav
        .find((nav) => nav.name === "General")!
        .body.map((info, index) => (
          <Fragment key={index}>
            <EmployeeDetailsList info={info} />
          </Fragment>
        ))}
    </div>
  );
}
