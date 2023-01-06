import { IMenuItem } from "./menu.interface";

export const categoriesMenu: IMenuItem[] = [
    {
        link: '/',
        title: 'Discover',
        icon: 'MdHome'
    },
    {
        link: '/live',
        title: 'Live TV',
        icon: 'MdLiveTv'
    },
    {
        link: '/shows',
        title: 'TV Shows',
        icon: 'MdTv'
    },
    {
        link: '/movies',
        title: 'Movies',
        icon: 'MdMovie'
    },
    {
        link: '/stuff',
        title: 'My Stuff',
        icon: 'MdPerson'
    }
]