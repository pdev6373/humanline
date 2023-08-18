import { CompanyInfoType } from "@/types";

const CompanyInfo: CompanyInfoType = {
  title: "Company Info",
  body: [
    {
      name: "Company Name",
      value: "Unpixel Studio",
      isRequired: true,
    },

    {
      name: "Company Website",
      value: "www.unpixel.co",
      isRequired: true,
    },

    {
      name: "Contact Number",
      value: {
        countryCode: "+62",
        number: "83843578300",
      },
      isRequired: true,
    },

    {
      name: "Contact Email",
      value: "contact@unpixel.com",
      isRequired: true,
    },

    {
      name: "Company Overview",
      value:
        "Unpixel Studio could be a creative agency that offers a range of services such as branding, graphic design, web development, and digital marketing. With a team of talented and experienced designers, developers, and marketers, Dummy Studio would work closely with clients to develop unique and effective solutions to their branding and marketing needs.",
      isRequired: false,
    },
  ],
};

export default CompanyInfo;
