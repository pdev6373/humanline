"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Input, LineBackground } from "@/components";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const nextHandler = () => router.push("/new-password");
  const backToLoginHandler = () => router.push("/login");

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
      />

      <div className={styles.mainWrapper}>
        <Button onClick={nextHandler}>Next</Button>
        <Button onClick={backToLoginHandler} type="secondary">
          Back to Login
        </Button>
      </div>
    </LineBackground>
  );
}
