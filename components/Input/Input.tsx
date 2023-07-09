import { InputType } from "@/types";
import styles from "./Input.module.css";

export default function Input({
  label,
  placeholder,
  setValue,
  type,
  value,
  isRequired = true,
}: InputType) {
  const inputChangeHandler = (e: any) => setValue(e.target.value);

  return (
    <div className={styles.wrapper}>
      <label className={styles.labelWrapper}>
        <p className={styles.label}>{label}</p>
        {isRequired ? <p className={styles.required}>*</p> : ""}
      </label>

      <div className={styles.inputWrapper}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={inputChangeHandler}
          className={styles.input}
        />
      </div>
    </div>
  );
}
