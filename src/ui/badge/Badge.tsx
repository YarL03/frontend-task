import { FC } from "react"

import { colors, TypeColors } from "../../utils/colors"

import styles from './Badge.module.scss'

interface IBadge {
    text: string,
    color: TypeColors
}

const Badge: FC<IBadge> = ({text, color}) => {
    return (
        <span
            className={styles.badge} 
            style={{backgroundColor: colors[color]}}
        >
            {text}
        </span>
    )
}

export default Badge