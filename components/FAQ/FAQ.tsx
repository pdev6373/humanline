import { Wrapper } from "..";
import Image from "next/image";
import styles from "./FAQ.module.css";

export default function FAQ({
  question,
  answer,
  time,
  likes,
}: {
  question: string;
  answer: string;
  time: string;
  likes: number;
}) {
  return (
    <Wrapper hasBorder padding={24} gap={32}>
      <>
        <Wrapper gap={16}>
          <>
            <h2 className={styles.question}>{question}</h2>
            <p className={styles.answer}>{answer}</p>
          </>
        </Wrapper>

        <div className={styles.faqBottom}>
          <div className={styles.faqTimeWrapper}>
            <Image
              src="/assets/calendar.svg"
              alt="calendar icon"
              width={18}
              height={18}
              className={styles.faqIcons}
            />
            <p className={styles.faqTime}>{time}</p>
          </div>

          <div className={styles.likesWrapper}>
            <Image
              src="/assets/like.svg"
              alt="like icon"
              width={24}
              height={24}
              className={styles.faqIcons}
            />
            <p className={styles.likes}>{likes}</p>
          </div>
        </div>
      </>
    </Wrapper>
  );
}
