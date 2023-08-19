import { Wrapper } from "..";
import Link from "next/link";
import styles from "./HelpCard.module.css";
import Image from "next/image";

export default function HelpCard({
  route,
  icon,
  title,
  body,
}: {
  route: string;
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <Link href={route}>
      <Wrapper hasBackground gap={16} padding={24}>
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
