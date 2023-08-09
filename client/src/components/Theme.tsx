import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/styled_components/ThemeToggle';
import { DashboardLayoutPropsType } from '../utils/types';

const Theme = ( { data: { isDarkTheme, toggleDarkTheme } }: DashboardLayoutPropsType ) => {
    return (
        <Wrapper onClick={ toggleDarkTheme }>
            {
                isDarkTheme ? 
                <BsFillSunFill className="toggle-icon" /> :
                <BsFillMoonFill className="toggle-icon" />
            }
        </Wrapper>
    );
};

export default Theme;