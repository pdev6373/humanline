import { LogoType } from "@/types";
import Image from "next/image";

export default function Logo({ width = 158, height = 24 }: LogoType) {
  return (
    <Image src="/assets/logo.svg" alt="logo" width={width} height={height} />
  );
}
