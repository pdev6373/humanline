"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Input, LineBackground } from "@/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useValidateInput from "@/hooks/useValidateInput";

const passwordRequirements = [
  "Password must be at least 8 characters",
  "Password must contain at least one number",
  "Password must contain at least one uppercase letter",
  "Password must contain st least one lowercase letter",
];

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([] as string[]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [confirmPasswordErrors, setConfirmPasswordErrors] = useState(
    [] as string[]
  );

  const validateInput = useValidateInput();

  const validatePassword = validateInput({
    type: "password",
    value: password,
  });

  const validateConfirmPassword = validateInput({
    type: "compare",
    value: password,
    valueCompare: confirmPassword,
  });

  const router = useRouter();

  const validateForm = () => {
    if (
      validateConfirmPassword.metRequirement &&
      validatePassword.metRequirement
    ) {
      setPasswordErrors([]);
      setConfirmPasswordErrors([]);
      return true;
    }

    if (!validatePassword.metRequirement)
      setPasswordErrors(validatePassword.errors);
    else setPasswordErrors([]);

    if (!validateConfirmPassword.metRequirement)
      setConfirmPasswordErrors(validateConfirmPassword.errors);
    else setConfirmPasswordErrors([]);

    return false;
  };

  useEffect(() => {
    setIsDisabled(
      !(validatePassword.metRequirement && !!confirmPassword.length)
    );
    validateForm();

    // setPasswordRequirements(
    //   passwordRequirements.map((requirement) =>
    //     requirement.checkIsMet(password)
    //       ? {
    //           requirement: requirement.requirement,
    //           isMet: true,
    //           checkIsMet: requirement.checkIsMet,
    //         }
    //       : {
    //           requirement: requirement.requirement,
    //           isMet: false,
    //           checkIsMet: requirement.checkIsMet,
    //         }
    //   )
    // );
  }, [password]);

  const nextHandler = () => router.push("/otp-verification");

  return (
    <LineBackground>
      <Image src="/assets/logo.svg" alt="logo" width={158} height={24} />

      <div className={styles.mainWrapper}>
        <h2 className={styles.title}>Update your password</h2>
        <p className={styles.text}>
          Set your new password with minimum 8 characters with a combination of
          letters and numbers
        </p>
      </div>

      <form className={styles.form}>
        <Input
          label="New Password"
          placeholder="Enter your new password"
          type="password"
          value={password}
          setValue={setPassword}
          errors={passwordErrors}
          displayMetRequirements={true}
          requirements={passwordRequirements}
        />

        <Input
          label="Confirmation New Password"
          placeholder="Re-type your new password"
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          errors={confirmPasswordErrors}
        />
      </form>

      <Button onClick={nextHandler}>Submit</Button>
    </LineBackground>
  );
}
