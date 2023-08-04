// Modules
import { Link, Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div>
            <h1>
                Home
            </h1>
            <Outlet />
            <Link to="/dashboard">
                Dashboard
            </Link>
        </div>
    )
}

export default HomeLayout;