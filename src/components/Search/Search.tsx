import { FC, memo } from 'react'

import SearchField from '../../ui/search-field/SearchField'
import Loader from '../../ui/loader/Loader'
import Gallery from '../../ui/gallery/Gallery'

import { useSearch } from './useSearch'

import { IGalleryItem } from '../../ui/gallery/gallery.interface'

import styles from './Search.module.scss'

const Search:FC = memo(() => {
    const {isLoading, isSuccess, foundData, handleSearch, onSearch, cleanSearch, searchTerm} = useSearch()

    return (
        <div className={styles.wrapper}>
            <SearchField cleanSearch={cleanSearch} searchTerm={searchTerm} handleSearch={handleSearch} onSearch={onSearch}/>
            {!searchTerm && <h1 className={styles.heading}>in the spotlight</h1>}
            <div>
                {!isLoading && isSuccess 
                    ? <Gallery keyframe={!searchTerm} items={foundData as IGalleryItem[]}/>
                    : <Loader/>
                }      
            </div>
        </div>
    )
})

export default Search