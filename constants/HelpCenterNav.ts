import { HelpCenterNavType } from "@/types";

const HelpCenterNav: HelpCenterNavType[] = [
  {
    icon: "/assets/question.svg",
    name: "FAQ",
    body: "Frequently Asked Questions",
    route: "/help-center/faq",
  },
  {
    icon: "/assets/share.svg",
    name: "Keyboard Shortcut",
    body: "Instructions for employees",
    route: "/help-center/keyboard-shortcut",
  },
  {
    icon: "/assets/phone.svg",
    name: "Contact Support",
    body: "Get support if you are having trouble",
    route: "/help-center/contact-support",
  },
  {
    icon: "/assets/lock.svg",
    name: "Privacy Policy",
    body: "Our privacy policy",
    route: "/help-center/privacy-policy",
  },
];

export default HelpCenterNav;
