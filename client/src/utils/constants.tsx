import { FormRowType } from "./types";

export const RegisterConstants: Array<FormRowType> = [
    { type: "text", name: "firstname", label: "First Name" },
    { type: "text", name: "lastname", label: "Last Name" },
    { type: "text", name: "location", label: "Location" },
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "password", label: "Password" }
];

export const LoginConstants: Array<FormRowType> = [
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "password", label: "Password" }
]