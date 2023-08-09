import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/styled_components/LogoutContainer';
import { useState } from 'react';
import { DashboardLayoutPropsType } from '../utils/types';

const Logout = ( { data: { user, logoutUser } }: DashboardLayoutPropsType ) => {
    const [ showLogout, setShowLogout ] = useState( false );

    return (
        <Wrapper>
            <button type="button" className="btn logout-btn" onClick={ () => setShowLogout( !showLogout ) }>
                {
                    user.avatar ?
                    <img src={ user.avatar } alt="avatar" className="img" /> :
                    <FaUserCircle />
                }
                { user?.name }
                <FaCaretDown />
            </button>
            <div className={ `dropdown ${ showLogout && "show-dropdown" }` }>
                <button type="button" className="dropdown-btn" onClick={ logoutUser }>
                    logout
                </button>
            </div>
        </Wrapper>
    );
};

export default Logout;