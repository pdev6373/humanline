"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SectionHeader, SettingsAside, Wrapper } from "@/components";
import styles from "./layout.module.css";

type SettingsLayoutType = {
  children: React.ReactNode;
};

type SettingsRoutesType =
  | "/settings"
  | "/settings/offices"
  | "/settings/department"
  | "/help-center/job-titles"
  | "/help-center/work-schedule"
  | "/help-center/permission";

type SettingsTextsType =
  | ""
  | "Offices"
  | "Department"
  | "Job Titles"
  | "Work Schedule"
  | "Permission";

export default function SettingsLayout({ children }: SettingsLayoutType) {
  const pathname = usePathname() as SettingsRoutesType;
  const [bodyText, setBodyText] = useState<SettingsTextsType>(
    bodyTextHandler()
  );

  useEffect(() => {
    setBodyText(bodyTextHandler());
  }, [pathname]);

  function bodyTextHandler(): SettingsTextsType {
    switch (pathname) {
      case "/settings":
        return "";
      case "/settings/offices":
        return "Offices";
      case "/settings/department":
        return "Department";
      case "/help-center/job-titles":
        return "Job Titles";
      case "/help-center/work-schedule":
        return "Work Schedule";
      case "/help-center/permission":
        return "Permission";
      default:
        return "";
    }
  }

  const canGoBack = () => bodyText.length;

  return (
    <Wrapper gap={32} padding={24} paddingBlock={32}>
      <>
        <SectionHeader
          title="Settings"
          body={canGoBack() ? "Settings" : "Manage your settings here"}
          currentRouteText={bodyText}
          homeRoute="/settings"
        />

        <div className={styles.wrapper}>
          <SettingsAside />
          <section className={styles.main}>{children}</section>
        </div>
      </>
    </Wrapper>
  );
}
