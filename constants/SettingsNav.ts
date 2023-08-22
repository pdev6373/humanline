import { SettingsNavType } from "@/types";

const SettingsNav: SettingsNavType[] = [
  {
    icon: "/assets/info.svg",
    name: "Company Info",
    route: "/settings",
  },

  {
    icon: "/assets/building.svg",
    name: "Offices",
    route: "/settings/offices",
  },

  {
    icon: "/assets/global.svg",
    name: "Department",
    route: "/settings/department",
  },

  {
    icon: "/assets/briefcase.svg",
    name: "Job Titles",
    route: "/settings/job-titles",
  },

  {
    icon: "/assets/calendar.svg",
    name: "Work Schedule",
    route: "/settings/work-schedule",
  },

  {
    icon: "/assets/settings.svg",
    name: "Permission",
    route: "/settings/permission",
  },

  {
    icon: "/assets/integration.svg",
    name: "Integration",
    route: "/settings/integration",
  },

  // {
  //   icon: "/assets/flash.svg",
  //   name: "subscription",
  //   route: "/settings/subscription",
  // },

  {
    icon: "/assets/lock.svg",
    name: "Password",
    route: "/settings/password",
  },

  {
    icon: "/assets/bell.svg",
    name: "Notification",
    route: "/settings/notification",
  },
];

export default SettingsNav;
