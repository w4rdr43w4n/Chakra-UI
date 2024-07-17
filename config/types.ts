import { ReactNode } from "react";
import * as Yup from "yup";



export const passwordSchema = Yup.string()
  .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .min(8, "Password must contain at least 8 characters");

export const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username must be at least 4 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: passwordSchema.required("Password is required"),
  passwordC: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords didn't match")
    .required("Confirm password is required"),
});


export interface formData {
  username: string;
  password: string;
  email?: string;
  passwordC?: string;
}

export interface MenuContextProviderProps{
  children:ReactNode;
}
export type snackBarType = 'info' | 'error' | 'success' | 'warning' | 'loading'