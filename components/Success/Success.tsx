import Image from "next/image";
import Button from "../Button/Button";
import { SuccessType } from "@/types";
import styles from "./Success.module.css";
import LineBackground from "../LineBackground/LineBackground";

export default function Success({
  title,
  text,
  buttonText,
  onClick,
}: SuccessType) {
  return (
    <LineBackground hasFooter={false}>
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
    </LineBackground>
  );
}
