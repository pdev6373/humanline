"use client";
import { Success } from "@/components";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const loginHandler = () => router.push("/login");

  return (
    <Success
      buttonText="Back to Login"
      onClick={loginHandler}
      title="Your successfully created your company"
      text="Thanks for being part of the Humanline! family, we are happy to have you onboard."
    />
  );
}
