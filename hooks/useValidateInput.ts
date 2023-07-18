import { InputValidateTypeProps } from "@/types";

export default function useValidateInput() {
  const validateInput = ({
    type,
    value,
    valueCompare,
  }: InputValidateTypeProps) => {
    let metRequirement = false;
    let errors: string[] = [];

    switch (type) {
      case "email": {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
          errors.push("Invalid email format");
        else metRequirement = true;

        break;
      }

      case "fullname": {
        if (!value.trim().includes(" "))
          errors.push("Full name (First name, and Last name) is required");
        else metRequirement = true;

        break;
      }

      case "password": {
        if (value.length < 8)
          errors.push("Password must be at least 8 characters");
        if (!/\d/.test(value))
          errors.push("Password must contain at least one number");
        if (!/[A-Z]/.test(value))
          errors.push("Password must contain at least one uppercase letter");
        if (!/[a-z]/.test(value))
          errors.push("Password must contain st least one lowercase letter");
        if (
          value.length >= 8 &&
          /\d/.test(value) &&
          /[A-Z]/.test(value) &&
          /[a-z]/.test(value)
        )
          metRequirement = true;

        break;
      }

      case "compare": {
        if (value !== valueCompare) errors.push("value does not match");
        else metRequirement = true;
      }
    }

    return { metRequirement, errors };
  };

  return validateInput;
}
