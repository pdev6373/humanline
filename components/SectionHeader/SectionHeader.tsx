import { SectionHeaderType } from "@/types";
import { SectionHeading, Search } from "..";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  title,
  body,
  currentRouteText,
  homeRoute,
}: SectionHeaderType) {
  return (
    <div className={styles.wrapper}>
      <SectionHeading
        title={title}
        body={body}
        currentRouteText={currentRouteText}
        homeRoute={homeRoute}
      />
      <Search placeholder="Search what you need" type="section" />
    </div>
  );
}
