import { HelpCard } from "@/components";
import { HelpCenterList } from "@/constants";
import styles from "./page.module.css";

export default function HelpCenter() {
  return (
    <div className={styles.wrapper}>
      {HelpCenterList.map((help) => (
        <HelpCard
          body={help.body}
          icon={help.icon}
          route={help.route}
          title={help.title}
        />
      ))}
    </div>
  );
}
