import Wrapper from "../Wrapper/Wrapper";
import styles from "./HelpBodyText.module.css";

export default function HelpBodyText({
  title,
  body,
}: {
  title: string;
  body: JSX.Element | string;
}) {
  return (
    <Wrapper gap={16}>
      <>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
      </>
    </Wrapper>
  );
}
