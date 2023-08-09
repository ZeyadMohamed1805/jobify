import { FormRowType, LinksType } from "./types";
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

export const DashboardLinks: Array< LinksType > = [
    { text: 'add job', path: '.', icon: <FaWpforms /> },
    { text: 'all jobs', path: 'all-jobs', icon: <MdQueryStats /> },
    { text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
    { text: 'profile', path: 'profile', icon: <ImProfile /> },
    { text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
]

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