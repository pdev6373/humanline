import { CheckboxType } from "@/types";
import styles from "./Checkbox.module.css";
import Image from "next/image";

export default function Checkbox({
  children,
  isChecked,
  setIsChecked,
}: CheckboxType) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={setIsChecked}
        value={children}
        className="sr-only"
        id="checkbox"
      />

      <label htmlFor="checkbox" className={styles.labelWrapper}>
        <Image
          src={isChecked ? "/assets/checked.svg" : "/assets/unchecked.svg"}
          alt="checkbox"
          width={20}
          height={20}
        />
        <p>{children}</p>
      </label>
    </div>
  );
}
