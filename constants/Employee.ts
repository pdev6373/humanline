import { EmployeeType } from "@/types";

const Employee: EmployeeType = {
  contact: [
    {
      icon: "/assets/mail.svg",
      value: "lincoln@gmail.com",
    },
    {
      icon: "/assets/phone.svg",
      value: "089318298493",
    },
    {
      icon: "/assets/global.svg",
      value: "GMT +07:00",
    },
  ],

  details: [
    {
      title: "Departement",
      value: "Designer",
    },
    {
      title: "Office",
      value: "Unpixel Studio",
    },
    {
      title: "Line Manager",
      value: "Skylar Calzoni",
      image: "/assets/manager.png",
    },
  ],

  nav: [
    {
      name: "General",
      route: "/",
      body: [
        {
          type: "Personal Info",
          content: [
            {
              title: "Full Name",
              value: "Lincoln Torff Nelson",
            },
            {
              title: "Gender",
              value: "Female",
            },
            {
              title: "Date of Birth",
              value: "23 May 1997",
            },
            {
              title: "Marital Status",
              value: null,
            },
            {
              title: "Nationality",
              value: "Indonesia",
            },
            {
              title: "Personal Tax ID",
              value: null,
            },
            {
              title: "Email Address",
              value: "lincoln@gmail.com",
            },
            {
              title: "Social Insurance",
              value: null,
            },
            {
              title: "Health Insurance",
              value: "Axa Insurance",
            },
            {
              title: "Phone Number",
              value: "089318298493",
            },
          ],
        },

        {
          type: "Address",
          content: [
            {
              title: "Primary addresss",
              value: "Banyumanik Street, Central Java. Semarang Indonesia",
            },
            {
              title: "Country",
              value: "Indonesia",
            },
            {
              title: "State/Province",
              value: "Central Java",
            },
            {
              title: "City",
              value: "Semarang",
            },
            {
              title: "Post Code",
              value: "03125",
            },
          ],
        },

        {
          type: "Emergency Contact",
          content: [
            {
              title: "Full Name",
              value: "Albert Jhonson",
            },
            {
              title: "Phone Number",
              value: "080839140011",
            },
            {
              title: "Relation",
              value: "Husband",
            },
          ],
        },

        {
          type: "Bank Account",
          content: [
            {
              title: "Bank Name",
              value: "Bank Central Asia",
            },
            {
              title: "Acount Name",
              value: "Lincoln Torff Nelson",
            },
            {
              title: "Branch",
              value: "Banyumanik",
            },
            {
              title: "Account Number",
              value: "012913010400",
            },
            {
              title: "SWIFT/BIC",
              value: null,
            },
            {
              title: "IBAN",
              value: null,
            },
          ],
        },
      ],
    },

    {
      name: "Job",
      route: "/job",
      body: [
        {
          type: "Employment Information",
          content: [
            {
              title: "Employee ID",
              value: "UN1203",
            },
            {
              title: "Service Year",
              value: "3 Years 7 Months",
            },
            {
              title: "Join Date",
              value: "20 Aug 2019",
            },
          ],
        },

        {
          type: "Job Timeline",
          content: [
            {
              title: "Effective Date",
              value: "20 Aug 2019",
            },
            {
              title: "Job Title",
              value: "UI UX Designer",
            },
            {
              title: "Potition Type",
              value: null,
            },
            {
              title: "Employment Type",
              value: "Fulltime",
            },
            {
              title: "Line Manager",
              value: "@skylar",
            },
          ],
        },

        {
          type: "Contract Timeline",
          content: [
            {
              title: "Contract Number",
              value: "#12345",
            },
            {
              title: "Contract Name",
              value: "Fulltime Remote",
            },
            {
              title: "Contract Type",
              value: "Fulltime Remote",
            },
            {
              title: "Start Date",
              value: "20 Aug 2019",
            },
            {
              title: "End Date",
              value: null,
            },
          ],
        },

        {
          type: "Work Schedule",
          content: [
            {
              title: "Current schedule",
              value: "Mon-Fri, Duration 40 hours/week",
            },
            {
              title: "Standard working hours/day",
              value: "8h 00m",
            },
            {
              title: "Schedule type",
              value: "Duration-based",
            },
            {
              title: "Total working hours/week",
              value: "40h 00m",
            },
            {
              title: "Daily working hours",
              value: [
                {
                  title: "Monday",
                  value: "8h 00m",
                },
                {
                  title: "Tuesday",
                  value: "8h 00m",
                },
                {
                  title: "Wednesday",
                  value: "8h 00m",
                },
                {
                  title: "Thursday",
                  value: "8h 00m",
                },
                {
                  title: "Friday",
                  value: "7h 00m",
                },
              ],
            },
          ],
        },

        {
          type: "Job History",
          content: [
            {
              title: "2020",
              value: [
                {
                  title: "February 25",
                  value:
                    'Employee Status was changed from "Active" to "On Leave". Joining "Final Trial Data" as a(n) "Finance Manager" at "Pham Ngoc Thach" on "20 Aug 2019".',
                },
              ],
            },
          ],
        },
      ],
    },

    // {
    //   name: "Payroll",
    //   route: "/payroll",
    //   body: [
    //     {
    //       content: [
    //         {
    //           title: "Employee Status",
    //           value: "Active",
    //         },
    //         {
    //           title: "Job Title",
    //           value: "Junior UI/UX Designer",
    //         },
    //         {
    //           title: "Employment Type",
    //           value: "Contractor",
    //         },
    //         {
    //           title: "Job Date",
    //           value: "16 Feb 2020",
    //         },
    //         {
    //           title: "Geofencing",
    //           value: "30 Sep 2024",
    //         },
    //         {
    //           title: "Last Working Date",
    //           value: null,
    //         },
    //       ],

    //       others: [
    //         {
    //           title: "Total Compesation",
    //           value: "$ 3,729,00",
    //         },
    //         {
    //           title: "Salary",
    //           value: null,
    //         },
    //         {
    //           title: "Recurring",
    //           value: "$ 0",
    //         },
    //         {
    //           title: "One-off",
    //           value: "$ 0",
    //         },
    //         {
    //           title: "Offset",
    //           value: "$ 0",
    //         },
    //         {
    //           title: "Time-off",
    //           value: "$ 0",
    //         },
    //         {
    //           title: "Overtime",
    //           value: "$ 0",
    //         },
    //         {
    //           title: "Deficit",
    //           value: "-$ 529,00",
    //         },
    //         {
    //           title: "Deficit",
    //           value: "-$ 529,00",
    //         },
    //         {
    //           title: "Attendance",
    //           value: "40h 30m",
    //         },
    //         {
    //           title: "Carry Over of Overtime",
    //           value: null,
    //         },
    //         {
    //           title: "Dependents",
    //           value: "0 Dependents",
    //         },
    //         {
    //           title: "Bank Information",
    //           value: "0 Dependents",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default Employee;
