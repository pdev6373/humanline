import { SubNavType } from "@/types";

const SettingsNav: SubNavType[] = [
  {
    name: "Company Info",
    icon: "/assets/info.svg",
    route: "/settings",
  },

  {
    name: "Offices",
    icon: "/assets/building.svg",
    route: "/settings/offices",
  },

  {
    name: "Department",
    icon: "/assets/global.svg",
    route: "/settings/department",
  },

  {
    name: "Job Titles",
    icon: "/assets/briefcase.svg",
    route: "/settings/job-titles",
  },

  {
    name: "Work Schedule",
    icon: "/assets/calendar.svg",
    route: "/settings/work-schedule",
  },

  {
    name: "Permission",
    icon: "/assets/settings.svg",
    route: "/settings/permission",
  },

  {
    name: "Integration",
    icon: "/assets/integration.svg",
    route: "/settings/integration",
  },

  {
    name: "subscription",
    icon: "/assets/flash.svg",
    route: "/settings/subscription",
  },

  {
    name: "Password",
    icon: "/assets/lock.svg",
    route: "/settings/password",
  },

  {
    name: "Notification",
    icon: "/assets/bell.svg",
    route: "/settings/notification",
  },
];

export default SettingsNav;
