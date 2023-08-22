import { Fragment } from "react";
import { HelpCard } from "@/components";
import { HelpCenterNav } from "@/constants";
import styles from "./page.module.css";

export default function HelpCenter() {
  return (
    <div className={styles.wrapper}>
      {HelpCenterNav.map((nav) => (
        <Fragment key={nav.name}>
          <HelpCard
            icon={nav.icon}
            title={nav.name}
            body={nav.body}
            route={nav.route}
          />
        </Fragment>
      ))}
    </div>
  );
}
