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
    icon: string;
}

export const menu: menuItemsType[] = [
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
    }
]