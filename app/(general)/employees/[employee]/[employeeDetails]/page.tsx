import { Employee } from "@/constants";
import { EmployeeDetailsList, EmployeeDetailsTable } from "@/components";
import { EmployeeDetailsPageType } from "@/types";
import styles from "./page.module.css";
import { Fragment } from "react";

export default function EmployeeDetails({
  params: { employeeDetails },
}: EmployeeDetailsPageType) {
  return (
    <div className={styles.wrapper}>
      {Employee.nav
        .find(
          (nav) => nav.name.toLowerCase() === employeeDetails.toLowerCase()
        )!
        .body.map((info, index) => (
          <Fragment key={index}>
            {info.type.toLowerCase() === "job timeline" ||
            info.type.toLowerCase() === "contract timeline" ? (
              <EmployeeDetailsTable info={info} />
            ) : (
              <EmployeeDetailsList info={info} />
            )}
          </Fragment>
        ))}
    </div>
  );
}
