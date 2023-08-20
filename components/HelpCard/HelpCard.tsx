import { HelpCardType } from "@/types";
import { Wrapper } from "..";
import Link from "next/link";
import Image from "next/image";
import styles from "./HelpCard.module.css";

export default function HelpCard({ icon, title, body, route }: HelpCardType) {
  return (
    <Link href={route}>
      <Wrapper hasBackground padding={24} gap={16}>
        <>
          <div className={styles.iconWrapper}>
            <Image
              src={icon}
              alt="help center icon"
              width={20}
              height={20}
              className={styles.icon}
            />
          </div>

          <h2 className={styles.title}>{title}</h2>
          <p className={styles.body}>{body}</p>
        </>
      </Wrapper>
    </Link>
  );
}
