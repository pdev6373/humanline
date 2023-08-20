import { WrapperType } from "@/types";
import { WrapperHeading } from "..";
import styles from "./Wrapper.module.css";

export default function Wrapper({
  children,
  header,
  hasBackground = false,
  hasBorder = false,
  padding = 0,
  paddingBlock = 0,
  gap = 0,
}: WrapperType) {
  return (
    <div
      className={[
        styles.wrapper,
        hasBackground && styles.background,
        hasBorder && styles.border,
        padding === 16 && styles.padding16,
        padding === 24 && styles.padding24,
        padding === 32 && styles.padding32,
        paddingBlock === 16 && styles.paddingBlock16,
        paddingBlock === 24 && styles.paddingBlock24,
        paddingBlock === 32 && styles.paddingBlock32,
        gap === 16 && styles.gap16,
        gap === 24 && styles.gap24,
        gap === 32 && styles.gap32,
      ].join(" ")}
    >
      {header && <WrapperHeading>{header}</WrapperHeading>}
      {children}
    </div>
  );
}
