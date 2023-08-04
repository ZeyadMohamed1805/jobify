// Modules
import { Link } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <h1>
                Dashboard
            </h1>
            <Link to="/">
                Home
            </Link>
        </div>
    )
}

export default DashboardLayout;