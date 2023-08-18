import { NumberStatsType } from "@/types";

const NumberStats: NumberStatsType[] = [
  {
    icon: "/assets/users.svg",
    name: "Total Employees",
    value: "3,540",
    percentGrowth: "+25.5%",
    isTendingUp: true,
  },
  {
    icon: "/assets/briefcase.svg",
    name: "Job Applicants",
    value: "1,150",
    percentGrowth: "+4.10%",
    isTendingUp: true,
  },
  {
    icon: "/assets/plus.svg",
    name: "New Employees",
    value: "500",
    percentGrowth: "+5.10%",
    isTendingUp: true,
  },
  {
    icon: "/assets/minus.svg",
    name: "Resigned Employees",
    value: "93",
    percentGrowth: "+25.5%",
    isTendingUp: false,
  },
];

export default NumberStats;
