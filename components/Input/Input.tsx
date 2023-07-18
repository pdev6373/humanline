import { InputType } from "@/types";
import styles from "./Input.module.css";
import Image from "next/image";
import { useState, useLayoutEffect } from "react";

export default function Input({
  label,
  placeholder,
  setValue,
  type,
  value,
  errors,
  displayMetRequirements = false,
  requirements = [],
  isRequired = true,
}: InputType) {
  const [hasValueChangedOnce, setHasValueChangedOnce] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  useLayoutEffect(() => {
    value.length && setHasValueChangedOnce(true);
  }, [value]);

  const inputChangeHandler = (e: any) => setValue(e.target.value);
  const blurHandler = () => setIsBlur(true);
  const showErrorHandler = () =>
    !!errors.length && hasValueChangedOnce && isBlur && !!value.length;

  return (
    <div className={styles.wrapper}>
      <label className={styles.labelWrapper}>
        <p className={styles.label}>{label}</p>
        {isRequired ? <p className={styles.required}>*</p> : ""}
      </label>

      <div
        className={
          showErrorHandler() ? styles.inputWrapperError : styles.inputWrapper
        }
      >
        <input
          onBlur={blurHandler}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={inputChangeHandler}
          className={styles.input}
        />
      </div>

      <div className={styles.errors}>
        {displayMetRequirements
          ? requirements.map((requirement) =>
              errors.includes(requirement) ? (
                <div className={styles.errorDisplayWrapper}>
                  <Image
                    src="/assets/close-circle.svg"
                    alt="alert"
                    width={18}
                    height={18}
                  />
                  <p className={styles.requirementError}>{requirement}</p>
                </div>
              ) : (
                <div className={styles.errorDisplayWrapper}>
                  <Image
                    src="/assets/tick-circle.svg"
                    alt="alert"
                    width={18}
                    height={18}
                  />
                  <p className={styles.requirementMetError}>{requirement}</p>
                </div>
              )
            )
          : showErrorHandler() &&
            errors.map((error) => (
              <div className={styles.errorWrapper}>
                <Image
                  src="/assets/alert-circle.svg"
                  alt="alert"
                  width={18}
                  height={18}
                />
                <p className={styles.error}>{error}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
