import { SocialButtonType } from "@/types";
import Image from "next/image";
import styles from "./SocialButton.module.css";

export default function SocialButton({
  socialIcon,
  children,
  onClick,
}: SocialButtonType) {
  return (
    <button onClick={onClick} className={styles.button}>
      <Image src={socialIcon} alt="social icon" height={22} width={22} />
      <p className={styles.buttonText}>{children}</p>
    </button>
  );
}
