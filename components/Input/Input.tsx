"use client";
import { InputType, PhoneNumberType } from "@/types";
import styles from "./Input.module.css";
import Image from "next/image";
import { useState, useLayoutEffect } from "react";
import { DropDown, Wrapper } from "..";
import { countries } from "countries-list";
import Countey from "i18n-iso-countries";

console.log(Countey.getNames("en", { select: "official" }));

const countryPhoneCode = Object.entries(countries).map(([key, value]) => ({
  icon: value.emoji,
  value: value.phone,
}));

// console.log(countryPhoneCode);

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
  const isValueString = typeof value === "string";

  useLayoutEffect(() => {
    isValueString
      ? value.length && setHasValueChangedOnce(true)
      : value.number.length && setHasValueChangedOnce(true);
  }, [value]);

  const blurHandler = () => setIsBlur(true);
  const inputChangeHandler = (e: any) => setValue(e.target.value);
  const showErrorHandler = () =>
    isValueString
      ? !!errors.length && hasValueChangedOnce && isBlur && !!value.length
      : !!errors.length &&
        hasValueChangedOnce &&
        isBlur &&
        !!value.number.length;

  return (
    <Wrapper gap={10}>
      <>
        <label className={styles.labelWrapper}>
          <p className={styles.label}>{label}</p>
          {isRequired && <p className={styles.required}>*</p>}
        </label>

        {type === "text-area" ? (
          <div
            className={[
              styles.textareaWrapper,
              showErrorHandler() && styles.inputWrapperError,
            ].join(" ")}
          >
            <textarea
              onBlur={blurHandler}
              placeholder={placeholder}
              value={value as string}
              onChange={inputChangeHandler}
              className={[styles.input, styles.textarea].join(" ")}
            />
          </div>
        ) : type === "country-code-phone-number" ? (
          <div className={styles.phoneInputWrapper}>
            <div
              className={[
                styles.inputWrapper,
                styles.phoneCodeWrapper,
                showErrorHandler() && styles.inputWrapperError,
              ].join(" ")}
            >
              <div className={styles.input}>
                {(value as PhoneNumberType).countryCode}
              </div>
              <DropDown
                list={countryPhoneCode}
                currentValue={(value as PhoneNumberType).countryCode}
              />
            </div>

            <div
              className={[
                styles.inputWrapper,
                styles.phoneNumberWrapper,
                showErrorHandler() && styles.inputWrapperError,
              ].join(" ")}
            >
              <input
                onBlur={blurHandler}
                type={type}
                placeholder={placeholder}
                value={(value as PhoneNumberType).number}
                onChange={inputChangeHandler}
                className={styles.input}
              />
            </div>
          </div>
        ) : (
          <div
            className={[
              styles.inputWrapper,
              showErrorHandler() && styles.inputWrapperError,
            ].join(" ")}
          >
            <input
              onBlur={blurHandler}
              type={type}
              placeholder={placeholder}
              value={value as string}
              onChange={inputChangeHandler}
              className={styles.input}
            />
          </div>
        )}

        <div className={styles.errors}>
          {displayMetRequirements
            ? requirements.map((requirement, index) => (
                <div className={styles.errorDisplayWrapper} key={index}>
                  {errors.includes(requirement) ? (
                    <>
                      <Image
                        src="/assets/close-circle.svg"
                        alt="alert"
                        width={18}
                        height={18}
                      />
                      <p className={styles.requirementError}>{requirement}</p>
                    </>
                  ) : (
                    <>
                      <Image
                        src="/assets/tick-circle.svg"
                        alt="alert"
                        width={18}
                        height={18}
                      />
                      <p className={styles.requirementMetError}>
                        {requirement}
                      </p>
                    </>
                  )}
                </div>
              ))
            : showErrorHandler() &&
              errors.map((error, index) => (
                <div className={styles.errorWrapper} key={index}>
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
      </>
    </Wrapper>
  );
}
