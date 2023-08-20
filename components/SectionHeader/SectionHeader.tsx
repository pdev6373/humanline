import { SectionHeaderType } from "@/types";
import { SectionHeading, Search } from "..";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  title,
  currentRouteName,
  description,
  homeRoute,
}: SectionHeaderType) {
  return (
    <div className={styles.wrapper}>
      <SectionHeading
        title={title}
        currentRouteName={currentRouteName}
        description={description}
        homeRoute={homeRoute}
      />
      <Search placeholder="Search what you need" type="section" />
    </div>
  );
}
