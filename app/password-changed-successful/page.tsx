"use client";
import { Success } from "@/components";
import { useRouter } from "next/navigation";

export default function PasswordChangedSuccessful() {
  const router = useRouter();

  const loginHandler = () => router.push("/login");

  return (
    <Success
      buttonText="Back to Login"
      onClick={loginHandler}
      title="Your successfully changed your password"
      text="Always remember the password for your account at Humanline!"
    />
  );
}
