import { HTMLInputTypeAttribute } from "react";

interface PlainButtonType {
  children: any;
  onClick: any;
}

interface PlainInputType {
  value: string;
  setValue: any;
}

export interface InputType extends PlainInputType {
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  errors: string[];
  isRequired?: boolean;
  displayMetRequirements?: boolean;
  requirements?: string[];
}

export interface ButtonType extends PlainButtonType {
  isDisabled?: boolean;
  type?: "primary" | "secondary";
}

export interface SocialButtonType extends PlainButtonType {
  socialIcon: string;
}

export interface CheckboxType {
  isChecked: boolean;
  setIsChecked: any;
  children: any;
}

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

export type NavType = {
  name: string;
  route:
    | "/"
    | "/employees"
    | "/checklist"
    | "/time-off"
    | "/attendance"
    | "/payroll"
    | "/performance"
    | "/recruitment"
    | "/help-center"
    | "/settings"
    | "/documents"
    | "/news"
    | "/report"
    | "/playslip";
  icon?: string;
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

export type WrapperType = {
  children: JSX.Element;
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

export type HelpCenterListType = {
  icon: string;
  title: string;
  body: string;
  route: string;
};

export type FAQType = {
  question: string;
  answer: string;
  time: string;
  likes: number;
};

export type PrivacyPolicyType = {
  title: string;
  body: string;
};
