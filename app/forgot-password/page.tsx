"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Input, LineBackground } from "@/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useValidateInput from "@/hooks/useValidateInput";

export default function ForgotPassword() {
  const router = useRouter();
  const validateInput = useValidateInput();
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState([] as string[]);

  const validateEmail = validateInput({ type: "email", value: email });

  const backToLoginHandler = () => router.push("/login");
  const nextHandler = () => validateForm() && router.push("/new-password");

  const validateForm = () => {
    if (validateEmail.metRequirement) {
      setEmailErrors([]);
      return true;
    }

    setEmailErrors(validateEmail.errors);
    return false;
  };

  useEffect(() => {
    setIsDisabled(!email.length);
    validateForm();
  }, [email]);

  return (
    <LineBackground>
      <Image src="/assets/logo.svg" alt="logo" width={158} height={24} />

      <div className={styles.mainWrapper}>
        <h2 className={styles.title}>Reset your password</h2>
        <p className={styles.text}>
          Enter your email address and we’ll send you password reset
          instructions.
        </p>
      </div>

      <Input
        label="Registered Email"
        placeholder="Input your registered email"
        type="email"
        value={email}
        setValue={setEmail}
        errors={emailErrors}
      />

      <div className={styles.buttonWrapper}>
        <Button onClick={nextHandler} isDisabled={isDisabled}>
          Next
        </Button>
        <Button onClick={backToLoginHandler} type="secondary">
          Back to Login
        </Button>
      </div>
    </LineBackground>
  );
}
