"use client";

import Image from "next/image";
import { Button, Checkbox, Input, SocialButton } from "@/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsDisabled(email.length && password.length ? false : true);
  }, [email, password]);

  const loginHandler = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  const googleLoginHandler = () => {};
  const appleLoginHandler = () => {};
  const rememberMeHandler = () => setRememberMe((prev) => !prev);

  return (
    <main className={styles.wrapper}>
      <section className={styles.heroWrapper}>
        <Image
          width={720}
          height={1024}
          className={styles.hero}
          src="/assets/login-dark.png"
          alt="onboarding imagge"
        />
      </section>

      <section className={styles.body}>
        <div className={styles.ornamentWrapper}>
          <Image
            width={100}
            height={61}
            className={styles.ornament}
            src="/assets/ornament.svg"
            alt="ornament image"
          />
        </div>

        <div className={styles.formWrapper}>
          <h3 className={styles.title}>Login first to your account</h3>
          <form className={styles.form} onSubmit={loginHandler}>
            <Input
              label="Email Address"
              placeholder="Input your registered email"
              value={email}
              setValue={setEmail}
              type="email"
            />

            <Input
              label="Password"
              placeholder="Input your password account"
              value={password}
              setValue={setPassword}
              type="password"
            />

            <div>
              <div className={styles.formOptions}>
                <Checkbox
                  isChecked={rememberMe}
                  setIsChecked={rememberMeHandler}
                >
                  Remember Me
                </Checkbox>
                <Link href="forgot-password" className={styles.forgotPassword}>
                  Forgot Password
                </Link>
              </div>

              <Button onClick={loginHandler} isDisabled={isDisabled}>
                Login
              </Button>

              <p className={styles.loginDivider}>Or login with</p>

              <div className={styles.socialButtonWrapper}>
                <SocialButton
                  socialIcon="/assets/google.svg"
                  onClick={googleLoginHandler}
                >
                  Google
                </SocialButton>
                <SocialButton
                  socialIcon="/assets/apple.svg"
                  onClick={appleLoginHandler}
                >
                  Apple
                </SocialButton>
              </div>

              <p className={styles.authChange}>
                You’re new in here?{" "}
                <Link href="/create-company" className={styles.authChangeLink}>
                  Create Account
                </Link>
              </p>
            </div>
          </form>
        </div>

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
