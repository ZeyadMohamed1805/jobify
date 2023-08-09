import { useState } from "react";

export const useLayoutProps = ( theme: boolean ) => {
    const user = { name: "Zeyad", avatar: "https://as1.ftcdn.net/v2/jpg/00/73/08/76/1000_F_73087609_FQe2v1GvOicbFDHiUokmueGfW2Fi5IDB.jpg" };
    const [ showSidebar, setshowSidebar ] = useState( false );
    const [ isDarkTheme, setIsDarkTheme ] = useState( theme );

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme( newDarkTheme );
        document.body.classList.toggle( "dark-theme", newDarkTheme );
        localStorage.setItem( "darkTheme", JSON.stringify( newDarkTheme ) );
    }

    const toggleSidebar = () => {
        setshowSidebar( previous => !previous );
    }

    const logoutUser = async () => {
        console.log( "Logout User" );
    }

    return { user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser };
}