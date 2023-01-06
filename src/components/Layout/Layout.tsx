import { FC } from "react"
import { Outlet } from "react-router-dom"

import { useQuery } from "../../hooks/useQuery"

import Navigation from "../Navigation/Navigation"

import api from "../../api/api"

import { IBackground } from "../../api/api.interface"

import styles from './Layout.module.scss'

const Layout: FC = () => {
    const {isLoading, data} = useQuery<IBackground[]>(api.getBgImages) 

    return (
        <div className={styles.layout}>
            <Navigation/>       
            {!isLoading && data && data.map((d, id)=> (
                <div 
                    key={d.url}
                    className={styles.bg}
                    style={{
                        animationDelay: `${id * 5}s`,
                        backgroundImage: `url('../../../api/${d.url}')`,
                        opacity: id !== 0 ? 0 : `.6`
                    }}
                />
            ))}
            <div className={styles.content}>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default Layout