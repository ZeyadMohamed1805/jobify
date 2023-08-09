import { NavLink } from "react-router-dom";
import { DashboardLinks } from "../utils/constants";
import { NavLinksPropsType } from "../utils/types";

const NavLinks = ( { data: { toggleSidebar } }: NavLinksPropsType ) => {
    return (
        <div className="nav-links">
            {
                DashboardLinks.map( ( link, index ) => (
                    <NavLink key={ index } to={ link.path } className="nav-link" onClick={ toggleSidebar } end>
                        <span className="icon">
                            { link.icon }
                        </span>
                        { link.text }
                    </NavLink>
                ) )
            }
        </div>
    )
}

export default NavLinks;