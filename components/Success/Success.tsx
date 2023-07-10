import Image from "next/image";
import Button from "../Button/Button";
import { SuccessType } from "@/types";
import styles from "./Success.module.css";

export default function Success({
  title,
  text,
  buttonText,
  onClick,
}: SuccessType) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <Image
          src="/assets/success.svg"
          alt="success image"
          width={265}
          height={140}
        />

        <div className={styles.body}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>

        <Button onClick={onClick}>{buttonText}</Button>
      </div>
    </main>
  );
}
