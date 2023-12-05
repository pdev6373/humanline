import { ChangePasswordType } from "@/types";

const ChangePasswordConstant: ChangePasswordType[] = [
  {
    label: "Old Password",
    placeholder: "Input your old password",
    value: "",
    isRequired: true,
  },
  {
    label: "New Password",
    placeholder: "Input your new password",
    value: "",
    isRequired: true,
  },
  {
    label: "Confirm Password",
    placeholder: "Re-type your new password",
    value: "",
    isRequired: true,
  },
];

export default ChangePasswordConstant;
