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
  type: string;
  isRequired?: boolean;
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
