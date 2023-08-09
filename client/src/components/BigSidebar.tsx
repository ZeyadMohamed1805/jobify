import Wrapper from "../assets/styled_components/BigSidebar";
import NavLinks from "./NavLinks";
import { Logo } from ".";
import { DashboardLayoutPropsType } from "../utils/types";

const BigSidebar = ( { data: { showSidebar, toggleSidebar, user } }: DashboardLayoutPropsType ) => {

    return (
        <Wrapper>
            <div className={ `sidebar-container ${ showSidebar && "show-sidebar" }` }>
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks data={ { toggleSidebar, user } } />
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSidebar;