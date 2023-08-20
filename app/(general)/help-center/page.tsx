import { Fragment } from "react";
import { HelpCard } from "@/components";
import { HelpCenterList } from "@/constants";
import styles from "./page.module.css";

export default function HelpCenter() {
  return (
    <div className={styles.wrapper}>
      {HelpCenterList.map((help) => (
        <Fragment key={help.title}>
          <HelpCard
            icon={help.icon}
            title={help.title}
            body={help.body}
            route={help.route}
          />
        </Fragment>
      ))}
    </div>
  );
}
