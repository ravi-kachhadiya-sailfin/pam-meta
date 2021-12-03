import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup
    .string("Enter your Email")
    .email("Enter a valid email")
    .required("Email is required"),
  // password: yup
  //   .string("Enter your password")
  //   .min(8, "Password should be of minimum 8 characters length")
  //   .required("Password is required")
  //   .matches(
  //     "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
  //     "Passwords must contains at least one capital, one small and one special character"
  //   ),
  sendNotification: yup.boolean(),
  phoneNumber: yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(7, 'Minimum 7 digits is required with the country code')
    .max(15, 'Maximum 15 digits are allowed with the country code'),
  name: yup.string().required('Name is required'),
  gender: yup.string(),
  age: yup
    .string()
    .nullable()
    .matches(/^[0-9]+$/, "Age must be only digits")
    .min(1, "Enter a valid age"),
  sexualOrientation: yup.string(),
  identifyAsTransgender: yup.string(),
  sendEmailOpportunities: yup.string(),
  howWeUseInfoProvide: yup.string(),
  securityAnswer: yup.string().required("Security Question is required"),
  race: yup.string(),
  organizationCode: yup.string(),
});
