// Modules
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/styled_components/Dashboard";
import { SmallSidebar, BigSidebar, Navbar } from "../components";
import { useLayoutProps } from "../utils/hooks";
import { DashboardPropsType } from "../utils/types";

const DashboardLayout = ( { theme }: DashboardPropsType ) => {
    const props = useLayoutProps( theme );

    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar data={ props } />
                <BigSidebar data={ props } />
                <div>
                    <Navbar data={ props } />
                    <div className="dashboard-page">
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    )
}

export default DashboardLayout;