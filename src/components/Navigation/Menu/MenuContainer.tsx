import { FC } from 'react'

import Menu from './Menu'

import { categoriesMenu } from './menu.data'

const MenuContainer: FC = () => {

    return (
        <>
            <Menu items={categoriesMenu}/>
        </>
    )
}

export default MenuContainer