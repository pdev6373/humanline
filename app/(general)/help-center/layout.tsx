"use client";
import { useState, useEffect } from "react";
import { SectionHeader, Wrapper } from "@/components";
import { usePathname } from "next/navigation";

type HelpCenterLayoutType = {
  children: React.ReactNode;
};

type HelpCenterRoutesType =
  | "/help-center"
  | "/help-center/faq"
  | "/help-center/privacy-policy"
  | "/help-center/keyboard-shortcut"
  | "/help-center/contact-support";

type HelpCenterTextsType =
  | ""
  | "FAQ"
  | "Privacy Policy"
  | "Keyboard Shortcut"
  | "Contact Support";

export default function HelpCenterLayout({ children }: HelpCenterLayoutType) {
  const pathname = usePathname() as HelpCenterRoutesType;
  const [bodyText, setBodyText] = useState<HelpCenterTextsType>(
    bodyTextHandler()
  );

  useEffect(() => {
    setBodyText(bodyTextHandler());
  }, [pathname]);

  function bodyTextHandler(): HelpCenterTextsType {
    switch (pathname) {
      case "/help-center":
        return "";
      case "/help-center/faq":
        return "FAQ";
      case "/help-center/privacy-policy":
        return "Privacy Policy";
      case "/help-center/keyboard-shortcut":
        return "Keyboard Shortcut";
      case "/help-center/contact-support":
        return "Contact Support";
      default:
        return "";
    }
  }

  const canGoBack = () => bodyText.length;

  return (
    <Wrapper gap={32} padding={24} paddingBlock={32}>
      <>
        <SectionHeader
          title="Help Center"
          body={canGoBack() ? "Help Center" : "What can we help you with?"}
          currentRouteText={bodyText}
          homeRoute="/help-center"
        />
        {children}
      </>
    </Wrapper>
  );
}
