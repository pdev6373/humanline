"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Input, SocialButton } from "@/components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateCompany() {
  const [name, setName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsDisabled(
      name.length && workEmail.length && password.length ? false : true
    );
  }, [name, workEmail, password]);

  const signupHandler = (e: any) => {
    e.preventDefault();
    router.push("/create-company-successful");
  };
  const googleLoginHandler = () => {};
  const appleLoginHandler = () => {};

  return (
    <main className={styles.wrapper}>
      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <div>
            <h3 className={styles.title}>
              Manage employees easily starting from now!
            </h3>
            <p className={styles.text}>Get started for free today!</p>
          </div>

          <form className={styles.form} onSubmit={signupHandler}>
            <Input
              label="Name"
              placeholder="Input your full name"
              value={name}
              setValue={setName}
              type="text"
            />

            <Input
              label="Work Email"
              placeholder="example@company.com"
              value={workEmail}
              setValue={setWorkEmail}
              type="email"
            />

            <Input
              label="Password"
              placeholder="Input your password account"
              value={password}
              setValue={setPassword}
              type="password"
            />

            <div className={styles.formBottom}>
              <Button onClick={signupHandler} isDisabled={isDisabled}>
                Create Account
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
                Already have an account?{" "}
                <Link href="/login" className={styles.authChangeLink}>
                  Login Here
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

      <section className={styles.subContent}>
        <div className={styles.starWrapper}>
          <Image
            width={509}
            height={779}
            className={styles.star}
            src="/assets/star.png"
            alt="star imagge"
          />
        </div>

        <div className={styles.subContentHeader}>
          <h2 className={styles.subContentTitle}>
            Let’s empower your employees today.
          </h2>
          <p className={styles.subContentText}>
            We help to complete all your conveyancing needs easily
          </p>
        </div>

        <div className={styles.heroWrapper}>
          <Image
            width={620}
            height={768}
            className={styles.hero}
            src="/assets/signup-dark.png"
            alt="onboarding imagge"
          />
        </div>
      </section>
    </main>
  );
}
