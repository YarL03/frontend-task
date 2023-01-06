import { FC, useRef, WheelEventHandler } from 'react'

import GalleryItem from './GalleryItem'

import { IGalleryItem } from './gallery.interface'

import styles from './Gallery.module.scss'

const Gallery: FC<{items: IGalleryItem[], keyframe?: boolean}> = ({items, keyframe = false}) => {
    const ref = useRef(null)

    const onWheel: WheelEventHandler<HTMLDivElement> = (e) => {
        ref.current ? (ref.current as HTMLDivElement).scrollLeft += e.deltaY
        : {}
    }

    return (
        <div ref={ref} onWheel={onWheel} className={styles.gallery}>
            {items.map((item, id)=> <GalleryItem keyframe={keyframe} key={id} item={item}/>)}
        </div>
    )
}

export default Gallery