import Wrapper from "../assets/styled_components/Navbar";
import Logout from "./Logout";
import { Logo } from ".";
import { FaAlignLeft } from "react-icons/fa";
import { DashboardLayoutPropsType } from "../utils/types";
import Theme from "./Theme";

const Navbar = ( { data }: DashboardLayoutPropsType ) => {
    
    return (
        <Wrapper>
            <div className="nav-center">
                <button type="button" className="toggle-btn" onClick={ data.toggleSidebar }>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h4 className="logo-text">
                        Dashboard
                    </h4>
                </div>
                <div className="btn-container">
                    <Theme data={ data } />
                    <Logout data={ data } />
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar;