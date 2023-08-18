import { NavType } from "@/types";

const NavConstant: NavType[] = [
  {
    name: "Employees",
    route: "/employees",
    icon: "/assets/users.svg",
  },
  {
    name: "Checklist",
    route: "/checklist",
    icon: "/assets/clipboard-list.svg",
  },
  {
    name: "Time Off",
    route: "/time-off",
    icon: "/assets/timer.svg",
  },
  {
    name: "Attendance",
    route: "/attendance",
    icon: "/assets/calendar.svg",
  },
  {
    name: "Payroll",
    route: "/payroll",
    icon: "/assets/card-send.svg",
  },
  {
    name: "Performance",
    route: "/performance",
    icon: "/assets/trending-up.svg",
  },
  {
    name: "Recruitment",
    route: "/recruitment",
    icon: "/assets/briefcase.svg",
  },
];

export default NavConstant;
