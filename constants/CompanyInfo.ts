import { CompanyInfoType } from "@/types";

const CompanyInfo: CompanyInfoType = {
  title: "Company Info",
  body: [
    {
      name: "Company Name",
      value: "Unpixel Studio",
      isRequired: true,
      type: "text",
    },

    {
      name: "Company Website",
      value: "www.unpixel.co",
      isRequired: true,
      type: "text",
    },

    {
      name: "Contact Number",
      value: {
        countryCode: "62",
        number: "83843578300",
      },
      isRequired: true,
      type: "country-code-phone-number",
    },

    {
      name: "Contact Email",
      value: "contact@unpixel.com",
      isRequired: true,
      type: "email",
    },

    {
      name: "Company Overview",
      value:
        "Unpixel Studio could be a creative agency that offers a range of services such as branding, graphic design, web development, and digital marketing. With a team of talented and experienced designers, developers, and marketers, Dummy Studio would work closely with clients to develop unique and effective solutions to their branding and marketing needs.",
      isRequired: false,
      type: "text-area",
    },
  ],
};

export default CompanyInfo;
