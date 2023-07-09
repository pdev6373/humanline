"use client";

import Image from "next/image";
import { Input } from "@/components";
import { useState } from "react";

import styles from "./page.module.css";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={styles.wrapper}>
      <section className={styles.imageWrapper}>
        <Image
          fill
          className={styles.image}
          src="/assets/onboarding-dark.png"
          alt="onboarding imagge"
        />
      </section>

      <section className={styles.formWrapper}>
        <div className={styles.ornamentWrapper}>
          <Image
            fill
            className={styles.ornamentImage}
            src="/assets/ornament.svg"
            alt="ornament imagge"
          />
        </div>

        <h3 className={styles.title}>Login first to your account</h3>

        <form className={styles.form}>
          <Input
            label="Email Address"
            placeholder="Input your registered email"
            value={email}
            setValue={setEmail}
            type="text"
          />

          <Input
            label="Password"
            placeholder="Input your password account"
            value={password}
            setValue={setPassword}
            type="password"
          />

          <div className={styles.formOptions}>
            <div>Remember Me</div>
            <Link href="forgot-password">Forgot Password</Link>
          </div>
        </form>

        <footer className={styles.footer}>
          <p className={styles.copyRight}>
            © 2023 Humanline . Alrights reserved.
          </p>
          <p className={styles.terms}>Terms & Conditions</p>
          <p className={styles.policy}>Privacy Policy</p>
        </footer>
      </section>
    </main>
  );
}
