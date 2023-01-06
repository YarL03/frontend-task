import { ChangeEvent, FC } from "react";

import MaterialIcon from "../MaterialIcon";

import { colors } from "../../utils/colors";

import styles from './SearchField.module.scss'

interface ISearchField {
    searchTerm: string
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
    onSearch: () => void
    cleanSearch: () => void
}

const SearchField: FC<ISearchField> = ({searchTerm, handleSearch, onSearch, cleanSearch}) => {

        return (
            <div className={styles.search}>
                {searchTerm && <button onClick={cleanSearch} className={styles.clean}>
                    <MaterialIcon name="MdClose"/>
                </button>}
                <input 
                    style={searchTerm ? {backgroundColor: '#fff', color: colors['gray']} : {}}
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button onClick={onSearch}>
                        search
                        <MaterialIcon name="MdSearch"/>
                </button>
            </div>
        )
}

export default SearchField