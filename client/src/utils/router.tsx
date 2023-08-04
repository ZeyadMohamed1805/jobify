// Modules
import { createBrowserRouter } from "react-router-dom";
import { AddJob, Admin, AllJobs, DeleteJob, EditJob, Error, Landing, Login, Profile, Register, Stats } from "../pages/index";
import { DashboardLayout, HomeLayout } from "../layouts/index";

// Declare The Router Object ( Paths & Pages )
const router = createBrowserRouter( [ 
    // Home Route
    { 
        path: "/", // Home Route
        element: <HomeLayout />, // Home Page
        errorElement: <Error />, // Global Error Page
        children: [
            { index: true, element: <Landing /> }, // Landing Route
            { path: "register", element: <Register /> }, // Register Route
            { path: "login", element: <Login /> }, // Login Route
            { path: "dashboard", element: <DashboardLayout /> }, // Dashboard Route
        ] 
    },
] );

export default router;