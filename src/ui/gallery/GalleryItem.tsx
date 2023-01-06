import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import Badge from '../badge/Badge'
import MaterialIcon from '../MaterialIcon'

import { IGalleryItemProps } from './gallery.interface'

import styles from './Gallery.module.scss'

const GalleryItem: FC<IGalleryItemProps & {keyframe: boolean}> = ({item, keyframe}) => {
    const [showDetails, setShowDetails] = useState(false)

    const onShowDetails = () => setShowDetails(true)

    const onHideDetails = () => setShowDetails(false)

    return (
        <div 
            className={styles.item}
            onMouseEnter={onShowDetails}
            onMouseLeave={onHideDetails}
        >
            <Link draggable={false} to={item.link} >
                {!showDetails && <div className={styles.badges}>
                    {item.is_new && <Badge color='orange' text={`New on NetUP TV`}/>}
                    <Badge color='green' text={`IMDB ${item.imdb_rate}/10`}/>
                </div>}

                {showDetails && <div className={styles.details}>
                    <button>
                        More details
                        <MaterialIcon name="MdPlayArrow"/>
                    </button>    
                </div>}
                
                <img alt={item.title} src={`../../../api/${keyframe ? item.keyframe : item.poster}`}
                draggable={false}/>

                <div className={styles.description}>
                    <div>
                        <span className={styles.title}>{item.title}</span>
                    </div>
                    <div >
                        <span className={styles.requisites}>
                            {`${item.country} | ${item.year} | ${Math.floor(item.length / 60)} min | ${item.num_seasons} seasons | ${item.min_age}+`}
                        </span>
                    </div>
                    <div>
                        <span className={styles.genres}>
                            {item.genres.reduce((prev, cur) => 
                                prev + ', ' + cur
                            )}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default GalleryItem