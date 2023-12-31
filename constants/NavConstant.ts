import { NavType } from "@/types";
import HelpCenterNav from "./HelpCenterNav";
import SettingsNav from "./SettingsNav";

const NavConstant: NavType[] = [
  {
    name: "Employees",
    description: "",
    route: "/employees",
    icon: "/assets/users.svg",
    subRoutes: [],
  },
  {
    name: "Checklist",
    description: "",
    route: "/checklist",
    icon: "/assets/clipboard-list.svg",
    subRoutes: [],
  },
  {
    name: "Time Off",
    description: "",
    route: "/time-off",
    icon: "/assets/timer.svg",
    subRoutes: [],
  },
  {
    name: "Attendance",
    description: "",
    route: "/attendance",
    icon: "/assets/calendar.svg",
    subRoutes: [],
  },
  {
    name: "Payroll",
    description: "",
    route: "/payroll",
    icon: "/assets/card-send.svg",
    subRoutes: [],
  },
  // {
  //   name: "Performance",
  //   description: "",
  //   route: "/performance",
  //   icon: "/assets/trending-up.svg",
  //   subRoutes: [],
  // },
  {
    name: "Recruitment",
    description: "",
    route: "/recruitment",
    icon: "/assets/briefcase.svg",
    subRoutes: [],
  },
  {
    name: "Help Center",
    description: "What can we help you with?",
    route: "/help-center",
    icon: "/assets/question.svg",
    subRoutes: HelpCenterNav,
  },
  {
    name: "Settings",
    description: "Manage your settings here",
    route: "/settings",
    icon: "/assets/settings.svg",
    subRoutes: SettingsNav,
  },
];

export default NavConstant;
