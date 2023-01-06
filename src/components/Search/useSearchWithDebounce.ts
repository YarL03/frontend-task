import { ChangeEvent, useState } from "react"

import { useDebounce } from "../../hooks/useDebounce";
import { useQuery } from "../../hooks/useQuery";

import api from "../../api/api";
import { IMovie } from "../../api/api.interface";

export const useSearch = () => { // поиск не по клику на кнопку, оставлю здесь просто как пример собственного кода
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearch = useDebounce(searchTerm, 500).toLowerCase()

    const {isLoading, data} = useQuery<IMovie[]>(api.getMovies, '_', debouncedSearch)

    const foundData = data ? data.filter(d => d.title.toLowerCase().includes(debouncedSearch)) : []
    
    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return {isLoading, handleSearch, foundData, searchTerm}
}