import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'

import MaterialIcon from '../../ui/MaterialIcon'

import Logo from './Logo'
import MenuContainer from './Menu/MenuContainer'

import styles from './Navigation.module.scss'

const Navigation: FC = memo(() => {

    return (
        <nav className={styles.nav}>
            <Logo/>
            <MenuContainer/>
            <div className={styles.buttons}>
                <NavLink
                    to={'/search'}
                    style={({isActive}) => isActive ? {backgroundColor: '#a3a2a6'} : {}}
                >
                    <MaterialIcon name="MdSearch"/>
                </NavLink>

                <NavLink
                    to={'/profile'}
                    style={({isActive}) => isActive ? {backgroundColor: '#a3a2a6'} : {}}
                >
                    <MaterialIcon name="MdPerson"/>
                </NavLink>
            </div>
        </nav>
    )
})

export default Navigation