import Image from "next/image";
import styles from "./page.module.css";
import { FAQs } from "@/constants";
import { HelpCenterHeader } from "@/components";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <HelpCenterHeader>Frequently Asked Questions</HelpCenterHeader>

      <div className={styles.faqs}>
        {FAQs.map((faq) => (
          <div className={styles.faq}>
            <div className={styles.questionWrapper}>
              <h2 className={styles.question}>{faq.question}</h2>
              <p className={styles.answer}>{faq.answer}</p>
            </div>

            <div className={styles.faqBottom}>
              <div className={styles.faqTimeWrapper}>
                <Image
                  src="/assets/calendar.svg"
                  alt="calendar icon"
                  width={18}
                  height={18}
                  className={styles.faqIcons}
                />
                <p className={styles.faqTime}>{faq.time}</p>
              </div>

              <div className={styles.likesWrapper}>
                <Image
                  src="/assets/like.svg"
                  alt="like icon"
                  width={24}
                  height={24}
                  className={styles.faqIcons}
                />
                <p className={styles.likes}>{faq.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
