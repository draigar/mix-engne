export interface menuItemsType {
    title: string;
    key: string;
    url: string;
    icon?: string;
    children?: menuItemsChildrenType[]
}

export interface menuItemsChildrenType {
    title: string;
    key: string;
    url: string;
    icon?: string;
}

export const AdminMenu: menuItemsType[] = [
    {
        title: 'Dashboard',
        key: 'dashboard',
        url: '/d/admin',
        icon: 'home',
    },
    {
        title: 'Projects',
        key: 'projects',
        url: '/d/admin/projects',
        icon: 'share-2',
    },
    {
        title: 'Transactions',
        key: 'transactions',
        url: '/d/admin/transactions',
        icon: 'percent',
    },
]

export const UserMenu: menuItemsType[] = [
    {
        title: 'Dashboard',
        key: 'dashboard',
        url: '/d/user',
        icon: 'home',
    },
    {
        title: 'Projects',
        key: 'projects',
        url: '/d/user/projects',
        icon: 'share-2',
        children: [
            {
                title: 'All Projects',
                key: 'projectsAll',
                url: '/d/user/projects',
            },
            {
                title: 'Create Projects',
                key: 'projectsCreate',
                url: '/d/user/projects/create',
            },
        ]
    },
    {
        title: 'Transactions',
        key: 'transactions',
        url: '/d/user/transactions',
        icon: 'percent',
    },
]

export const EngineerMenu: menuItemsType[] = [
    {
        title: 'Dashboard',
        key: 'dashboard',
        url: '/d/engineer',
        icon: 'home',
    },
    {
        title: 'Projects',
        key: 'projects',
        url: '/d/engineer/projects',
        icon: 'share-2',
    },
]