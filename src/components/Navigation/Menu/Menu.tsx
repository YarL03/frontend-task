import { FC } from 'react'

import { IMenuItem } from './menu.interface'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const Menu: FC<{items: IMenuItem[]}> = ({items}) => {

    return (
        <div className={styles.menu}>
            {items.map((item, id) => <MenuItem key={id} item={item}/>)}
        </div>
    )
}

export default Menu