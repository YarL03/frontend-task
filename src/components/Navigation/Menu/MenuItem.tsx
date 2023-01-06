import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import MaterialIcon from '../../../ui/MaterialIcon'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{item: IMenuItem}> = ({item}) => {

    return (
        <NavLink 
            to={item.link}
            style={({isActive}) => isActive ? {backgroundColor: '#a3a2a6'} : {} }    
        >
            {item.icon && <MaterialIcon name={item.icon}/>}
            {item.title && <span>{item.title}</span> }
        </NavLink>
    )
}

export default MenuItem