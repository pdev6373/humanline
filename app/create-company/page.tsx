"use client";
import {
  Input,
  Button,
  Footer,
  AuthChange,
  AuthDivider,
  SocialLogin,
} from "@/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import useValidateInput from "@/hooks/useValidateInput";

export default function CreateCompany() {
  const router = useRouter();
  const validateInput = useValidateInput();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [nameErrors, setNameErrors] = useState([] as string[]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [passwordErrors, setPasswordErrors] = useState([] as string[]);
  const [workEmailErrors, setWorkEmailErrors] = useState([] as string[]);

  const validateName = validateInput({ type: "fullname", value: name });
  const validateEmail = validateInput({ type: "email", value: workEmail });
  const validatePassword = validateInput({
    type: "password",
    value: password,
  });

  const validateForm = () => {
    if (
      validateName.metRequirement &&
      validateEmail.metRequirement &&
      validatePassword.metRequirement
    ) {
      setNameErrors([]);
      setWorkEmailErrors([]);
      setPasswordErrors([]);
      return true;
    }

    if (!validateName.metRequirement) setNameErrors(validateName.errors);
    else setNameErrors([]);

    if (!validateEmail.metRequirement) setWorkEmailErrors(validateEmail.errors);
    else setWorkEmailErrors([]);

    if (!validatePassword.metRequirement)
      setPasswordErrors(validatePassword.errors);
    else setPasswordErrors([]);

    return false;
  };

  useEffect(() => {
    setIsDisabled(
      !(
        validateName.metRequirement &&
        validateEmail.metRequirement &&
        !!password.length
      )
    );
    validateForm();
  }, [name, workEmail, password]);

  const signupHandler = (e: any) => {
    e.preventDefault();
    validateForm() && router.push("/create-company-successful");
  };

  return (
    <main className={styles.wrapper}>
      <section className={styles.body}>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={158}
          height={24}
          className={styles.logo}
        />

        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>
            Manage employees easily starting from now!
          </h3>
          <p className={styles.titleWrapperText}>Get started for free today!</p>
        </div>

        <form className={styles.form} onSubmit={signupHandler}>
          <Input
            label="Name"
            placeholder="Input your full name"
            value={name}
            setValue={setName}
            type="text"
            errors={nameErrors}
          />

          <Input
            label="Work Email"
            placeholder="example@company.com"
            value={workEmail}
            setValue={setWorkEmail}
            type="email"
            errors={workEmailErrors}
          />

          <Input
            label="Password"
            placeholder="Input your password account"
            value={password}
            setValue={setPassword}
            type="password"
            errors={passwordErrors}
          />
        </form>

        <div className={styles.callToAction}>
          <Button onClick={signupHandler} isDisabled={isDisabled}>
            Create Account
          </Button>
          <AuthDivider text="Or sign up with" />
          <SocialLogin />
        </div>

        <AuthChange
          href="/login"
          text="Already have an account?"
          action="Login Here"
        />

        <Footer />
      </section>

      <section className={styles.heroWrapper}>
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

        <div className={styles.heroImageWrapper}>
          <Image
            width={620}
            height={768}
            className={styles.heroImage}
            src="/assets/signup-dark.png"
            alt="onboarding imagge"
          />
        </div>
      </section>
    </main>
  );
}
