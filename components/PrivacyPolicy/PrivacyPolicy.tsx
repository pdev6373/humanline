import { Wrapper } from "..";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <Wrapper gap={16}>
      <>
        <h2 className={styles.header}>{title}</h2>
        <p className={styles.body}>{body}</p>
      </>
    </Wrapper>
  );
}
