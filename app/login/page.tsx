"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Input,
  Footer,
  Button,
  Checkbox,
  AuthChange,
  AuthDivider,
  SocialLogin,
} from "@/components";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import useValidateInput from "@/hooks/useValidateInput";

export default function Login() {
  const router = useRouter();
  const validateInput = useValidateInput();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrors, setEmailErrors] = useState([] as string[]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([] as string[]);

  const validateEmail = validateInput({ type: "email", value: email });
  const validatePassword = validateInput({
    type: "password",
    value: password,
  });

  const validateForm = () => {
    if (validateEmail.metRequirement && validatePassword.metRequirement) {
      setEmailErrors([]);
      setPasswordErrors([]);
      return true;
    }

    if (!validateEmail.metRequirement) setEmailErrors(validateEmail.errors);
    else setEmailErrors([]);

    if (!validatePassword.metRequirement)
      setPasswordErrors(validatePassword.errors);
    else setPasswordErrors([]);

    return false;
  };

  useEffect(() => {
    setIsDisabled(!(validateEmail.metRequirement && !!password.length));
    validateForm();
  }, [email, password, validateEmail.metRequirement]);

  const loginHandler = async (e: any) => {
    e.preventDefault();
    validateForm() && router.push("/");
  };

  const rememberMeHandler = () => setRememberMe((prev) => !prev);

  return (
    <main className={styles.wrapper}>
      <section className={styles.heroWrapper}>
        <div className={styles.heroImageWrapper}>
          <Image
            width={720}
            height={1024}
            className={styles.heroImage}
            src="/assets/login-dark.png"
            alt="onboarding image"
          />
        </div>

        <div>
          <Image src="/assets/logo.svg" alt="logo" width={158} height={24} />
          <h3>Amazing Platform!</h3>
          <p>
            "The human resource platform helped streamline our hiring process
            and saved us a significant amount of time and effort.”
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={158}
          height={24}
          className={styles.logo}
        />

        <div className={styles.ornamentWrapper}>
          <Image
            width={100}
            height={61}
            className={styles.ornament}
            src="/assets/ornament.svg"
            alt="ornament image"
          />
        </div>

        <h3 className={styles.title}>Login first to your account</h3>

        <form className={styles.form} onSubmit={loginHandler}>
          <Input
            label="Email Address"
            placeholder="Input your registered email"
            value={email}
            setValue={setEmail}
            type="email"
            errors={emailErrors}
          />

          <Input
            label="Password"
            placeholder="Input your password account"
            value={password}
            setValue={setPassword}
            type="password"
            errors={passwordErrors}
          />

          <div className={styles.formOptions}>
            <div className={styles.rememberMe}>
              <Checkbox isChecked={rememberMe} setIsChecked={rememberMeHandler}>
                Remember Me
              </Checkbox>
            </div>

            <Link href="forgot-password" className={styles.forgotPassword}>
              Forgot Password
            </Link>
          </div>
        </form>

        <div className={styles.callToAction}>
          <Button onClick={loginHandler} isDisabled={isDisabled}>
            Login
          </Button>
          <AuthDivider text="Or sign in with" />
          <SocialLogin />
        </div>

        <AuthChange
          href="/create-company"
          text="You’re new in here?"
          action="Create Account"
        />

        <Footer />
      </section>
    </main>
  );
}
