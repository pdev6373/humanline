"use client";
import { Button, Input, LineBackground } from "@/components";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const nextHandler = () => router.push("/password-changed-successful");

  return (
    <LineBackground>
      <Image src="/assets/logo.svg" alt="logo" width={158} height={24} />

      <div className={styles.mainWrapper}>
        <h2 className={styles.title}>OTP Verification</h2>
        <p className={styles.text}>
          We have sent a verification code to email address <br />
          <span className={styles.emailAddress}>pristia@gmail.com</span>.{" "}
          <Link href="/forgot-password" className={styles.wrongEmail}>
            Wrong Email?
          </Link>
        </p>
      </div>

      <div>
        <Input
          label="OTP"
          placeholder="Enter the OTP sent to your mail"
          type="password"
          value={otp}
          setValue={setOtp}
        />
      </div>

      <Button onClick={nextHandler}>Submit</Button>
    </LineBackground>
  );
}
