"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Input, LineBackground } from "@/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState([
    {
      requirement: "8 characters",
      isMet: false,
      checkIsMet: (value: string) => value.length >= 8,
    },
    {
      requirement: "Number (0-9)",
      isMet: false,
      checkIsMet: (value: string) => /\d/.test(value),
    },
    {
      requirement: "Uppercase letter (A-Z)",
      isMet: false,
      checkIsMet: (value: string) => /[A-Z]/.test(value),
    },
    {
      requirement: "Lowercase letter (a-z)",
      isMet: false,
      checkIsMet: (value: string) => /[a-z]/.test(value),
    },
  ]);
  const router = useRouter();

  useEffect(() => {
    setPasswordRequirements(
      passwordRequirements.map((requirement) =>
        requirement.checkIsMet(password)
          ? {
              requirement: requirement.requirement,
              isMet: true,
              checkIsMet: requirement.checkIsMet,
            }
          : {
              requirement: requirement.requirement,
              isMet: false,
              checkIsMet: requirement.checkIsMet,
            }
      )
    );
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

      <div>
        <Input
          label="New Password"
          placeholder="Enter your new password"
          type="password"
          value={password}
          setValue={setPassword}
        />

        <div className={styles.requirements}>
          {passwordRequirements.map((requirement) => (
            <div key={requirement.requirement} className={styles.requirement}>
              <Image
                src={
                  requirement.isMet
                    ? "/assets/tick-circle.svg"
                    : "/assets/close-circle.svg"
                }
                alt="tick image"
                width={16}
                height={16}
              />
              <p
                className={
                  requirement.isMet
                    ? styles.requirementTextChecked
                    : styles.requirementText
                }
              >
                {requirement.requirement}
              </p>
            </div>
          ))}
        </div>

        <Input
          label="Confirmation New Password"
          placeholder="Re-type your new password"
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
      </div>

      <Button onClick={nextHandler}>Submit</Button>
    </LineBackground>
  );
}
