import { NavType } from "@/types";
import SettingsNav from "./SettingsNav";

const NavConstant: NavType[] = [
  {
    name: "Employees",
    route: "/employees",
    icon: "/assets/users.svg",
    nav: SettingsNav,
  },
  {
    name: "Checklist",
    route: "/checklist",
    icon: "/assets/clipboard-list.svg",
    nav: [],
  },
  {
    name: "Time Off",
    route: "/time-off",
    icon: "/assets/timer.svg",
    nav: [],
  },
  {
    name: "Attendance",
    route: "/attendance",
    icon: "/assets/calendar.svg",
    nav: [],
  },
  {
    name: "Payroll",
    route: "/payroll",
    icon: "/assets/card-send.svg",
    nav: [],
  },
  {
    name: "Performance",
    route: "/performance",
    icon: "/assets/trending-up.svg",
    nav: [],
  },
  {
    name: "Recruitment",
    route: "/recruitment",
    icon: "/assets/briefcase.svg",
    nav: [],
  },
  {
    name: "Help Center",
    route: "/help-center",
    icon: "/assets/question.svg",
    nav: [],
  },
  {
    name: "Settings",
    route: "/settings",
    icon: "/assets/settings.svg",
    nav: [],
  },
];

export default NavConstant;
