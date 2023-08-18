import { HelpCenterHeader } from "@/components";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <HelpCenterHeader>Customer Contact Support</HelpCenterHeader>

      <div className={styles.main}>
        <h2 className={styles.header}>
          If you have any trouble getting started or during usage, please reach
          out to us using the following support channels.
        </h2>

        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Intercom Live Chat System</h3>
          <p className={styles.body}>
            Please describe your problems in the Live Chat, our chat specialists
            will answer your questions. We work from 9:00 to 18:00 (GMT +7),
            Monday to Friday. You are welcome to leave us messages if our
            specialists are not online.
          </p>
        </div>

        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Submit a Ticket</h3>
          <p className={styles.body}>
            Send your concerns or question in the email{" "}
            <a href="" className={styles.mail}>
              contact@humanline.com
            </a>
            , our Customer Support team will get back to you as soon as
            possible.
          </p>
        </div>
      </div>
    </div>
  );
}
