import { ColumnDef } from "@tanstack/react-table";
import { ReactNode, HTMLInputTypeAttribute } from "react";

export type LayoutType = {
  children: ReactNode;
};

export type HeaderNavType = {
  name: "Documents" | "News" | "Payslip" | "Report";
  route: "/documents" | "/news" | "/playslip" | "/report";
};

type WrapperSpaceType = 0 | 4 | 10 | 16 | 24 | 32;
export type WrapperType = {
  children: JSX.Element;
  hasBackground?: boolean;
  hasBorder?: boolean;
  padding?: WrapperSpaceType;
  paddingBlock?: WrapperSpaceType;
  gap?: WrapperSpaceType;
  header?: string;
};

export type HelpCardType = {
  icon: string;
  title: string;
  body: string;
  route: string;
};

export type HelpBodyTextType = {
  title: string;
  body: JSX.Element | string;
};

export type FAQType = {
  question: string;
  answer: string;
  time: string;
  likes: number;
};

export type ShortcutType = {
  windows: string;
  mac_os: string;
  title: string;
};

export type TableType<Type> = {
  data: Type[];
  tableColumns: ColumnDef<Type>[];
};

//

type OfficeOtherInfoype = {
  title: string;
  value: string;
};
export type OfficeConstantType = {
  name: string;
  location: string;
  isHQ: boolean;
  otherInfo: OfficeOtherInfoype[];
};

export type ChangePasswordType = {
  label: string;
  placeholder: string;
  value: string;
  isRequired: boolean;
};

interface PlainButtonType {
  children: any;
  onClick: any;
}

export type JobTitlesType = {
  title: string;
  numberOfEmployees: number;
  isActive: boolean;
};

export type PhoneNumberType = {
  countryCode: string;
  number: string;
};

type FormInputType = HTMLInputTypeAttribute | "text-area";

export type InputType = {
  label: string;
  placeholder: string;
  type: FormInputType;
  errors: string[];
  isRequired?: boolean;
  displayMetRequirements?: boolean;
  requirements?: string[];
  value: string | PhoneNumberType;
  setValue: any;
  isDisabled?: boolean;
  icon?: string;
};

export interface ButtonType extends PlainButtonType {
  isDisabled?: boolean;
  type?:
    | "primary"
    | "secondary"
    | "primary-small"
    | "primary-small-dark"
    | "secondary-small";
  icon?: string;
}

export interface SocialButtonType extends PlainButtonType {
  socialIcon: string;
}

export type ChipType = {
  children: string;
};

export type NotificationsConstantType = {
  title: string;
  body: string;
  isActive: boolean;
};

export type TextsType = {
  children: string | JSX.Element;
  type: "heading" | "body";
  size: 12 | 14 | 20;
  variation: "light" | "dark";
  weight: "400" | "500" | "600" | "700";
  letterSpacing?: 0.2 | 0.3;
};

export type RecruitmentApplicantsType = {
  name: string;
  image: string;
  email: string;
  phoneNumber: string;
  cv: string;
  createdTime: string;
  stage:
    | "applied"
    | "screening"
    | "1st interview"
    | "2nd interview"
    | "hiring"
    | "rejected";
};
export type RecruitmentType = {
  title: string;
  isActive: boolean;
  position: string;
  company: string;
  createdTime: string;
  applicants: RecruitmentApplicantsType[];
};

export interface CheckboxType {
  isChecked: boolean;
  setIsChecked: any;
  children: any;
}

export type DropdownListType = {
  icon?: string;
  value: string;
};

export type DropdownType = {
  list: DropdownListType[];
  currentValue: string;
};

export type SwitchType = {
  isActive: boolean;
  onClick: any;
};

export interface SuccessType {
  title: string;
  text: string;
  buttonText: string;
  onClick: any;
}

export interface LineBackgroundType {
  children: any;
  hasFooter?: boolean;
}

interface RenderAppropriateComponentProps {
  mobileComponent: any;
  webComponent: any;
}

export interface RenderAppropriateComponentType {
  components: RenderAppropriateComponentProps;
}

export interface AuthChangeType {
  href: string;
  text: string;
  action: "Create Account" | "Login Here";
}

export interface InputValidateTypeProps {
  type: "email" | "password" | "fullname" | "compare";
  value: string;
  valueCompare?: string;
}

export interface AuthDividerProps {
  text: string;
}

export type LogoType = {
  width?: number;
  height?: number;
};

export type SettingsNavType = {
  icon?: string;
  name: string;
  route: string;
};

export type HelpCenterNavType = {
  icon: string;
  name: string;
  body: string;
  route: string;
};

export type NavType = {
  name: string;
  description: string;
  route: string;
  icon?: string;
  subRoutes: SettingsNavType[] | HelpCenterNavType[];
};

export type ModePropertiesType = {
  image: string;
  text: "Light" | "Dark";
  type: "light" | "dark";
};

export type ModeType = {
  light: ModePropertiesType;
  dark: ModePropertiesType;
};

export type NumberStatsType = {
  icon: string;
  name: string;
  value: string;
  percentGrowth: string;
  isTendingUp: boolean;
};

export type EmployeeContactType = {
  icon: string;
  value: string;
};

export type EmployeeDetailsType = {
  title: string;
  value: string;
  image?: string;
};

export type EmployeeNavBodyContentType = {
  title: string;
  value: string | EmployeeDetailsType[] | null;
};

export type EmployeeNavBodyType = {
  type: string;
  content: EmployeeNavBodyContentType[];
};

export type EmployeeDetailsListType = {
  info: EmployeeNavBodyType;
};

export type EmployeeNavType = {
  name: string;
  route: string;
  body: EmployeeNavBodyType[];
};

export type EmployeeHeaderNavType = {
  nav: EmployeeNavType[];
};

export type EmployeeType = {
  contact: EmployeeContactType[];
  details: EmployeeDetailsType[];
  nav: EmployeeNavType[];
};

export type EmployeePageType = {
  params: {
    employee: string;
  };
};

export type EmployeeDetailsPageType = {
  params: {
    employee: string;
    employeeDetails: string;
  };
};

export interface PrivacyPolicyType {
  title: string;
  body: string;
}

export interface ShortcutsOtherInfoType extends PrivacyPolicyType {}

export interface SectionHeaderType {
  title: string;
  currentRouteName: string;
  description: string;
  homeRoute: string;
}

export interface ShortcutsType {
  shortcuts: ShortcutType[];
  otherInfo: ShortcutsOtherInfoType[];
}

export interface CompanyInfoBodyType {
  name: string;
  value: string | PhoneNumberType;
  isRequired: boolean;
  type: FormInputType;
}

export interface CompanyInfoType {
  title: string;
  body: CompanyInfoBodyType[];
}

export interface SettingsConstantType {
  companyInfo: CompanyInfoType;
}

export interface EmployeesContactType {
  type: "mail" | "phone";
  contact: string;
}

export interface AllEmployeesType {
  profilePics: string;
  fullName: string;
  role: string;
  contacts: EmployeesContactType[];
}
