// Styled Components

export type StatItemBackgroundType = {
    bcg: string
}

// Hooks

export type useRouteErrorType = any

// Consants

export type LinksType = {
    text: string,
    path: string,
    icon: JSX.Element
}

export type FormRowType = {
    type: string,
    name: string,
    label: string
}

// Props

export type FormRowPropsType = {
    data: FormRowType
}

export type NavLinksPropsType = {
    data: {
        user: { 
            name: string,
            avatar: string
        },
        toggleSidebar: () => void
    }
}

export type DashboardPropsType = {
    theme: boolean
}

export type DashboardLayoutPropsType = {
    data: {
        user: { 
            name: string,
            avatar: string
        },
        showSidebar: boolean,
        isDarkTheme: boolean,
        toggleDarkTheme: () => void,
        toggleSidebar: () => void,
        logoutUser: () => void
    }
}