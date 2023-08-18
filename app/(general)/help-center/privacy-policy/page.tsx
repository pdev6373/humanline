import { HelpCenterHeader } from "@/components";
import styles from "./page.module.css";
import { PrivacyPolicies } from "@/constants";
export default function page() {
  return (
    <div className={styles.wrapper}>
      <HelpCenterHeader>Privacy Policy</HelpCenterHeader>

      <div className={styles.privacyPolicies}>
        {PrivacyPolicies.map((privacyPolicy) => (
          <div className={styles.privacyPolicy}>
            <h2 className={styles.header}>{privacyPolicy.title}</h2>
            <p className={styles.body}>{privacyPolicy.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
