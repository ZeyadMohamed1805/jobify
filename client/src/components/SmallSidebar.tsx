import Wrapper from "../assets/styled_components/SmallSidebar";
import { Logo } from ".";
import NavLinks from "./NavLinks";
import { FaTimes } from "react-icons/fa";
import { DashboardLayoutPropsType } from "../utils/types";

const SmallSidebar = ( { data: { showSidebar, toggleSidebar, user } }: DashboardLayoutPropsType ) => {
    
    return (
        <Wrapper>
            <div className={`sidebar-container ${ showSidebar && "show-sidebar" }`}>
                <div className="content">
                    <button type="button" className="close-btn" onClick={ toggleSidebar }>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks data={ { toggleSidebar, user } } />
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar;