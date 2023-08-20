import { HelpBodyTextType } from "@/types";
import { Wrapper } from "..";
import styles from "./HelpBodyText.module.css";

export default function HelpBodyText({ title, body }: HelpBodyTextType) {
  return (
    <Wrapper gap={16}>
      <>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
      </>
    </Wrapper>
  );
}
