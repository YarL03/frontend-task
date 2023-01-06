import { ChangeEvent, useState, useEffect } from "react"

import api from "../../api/api";
import { IMovie } from "../../api/api.interface";

export const useSearch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
    const [foundData, setFoundData] = useState<IMovie[]>([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        if (!searchTerm) {
            setIsLoading(true)
            setIsSuccess(null)

            api.getMovies()
            .then(res => {
                setTimeout(() => {
                    setFoundData(res ? res.filter(d => d.title.toLowerCase().includes(searchTerm.toLowerCase())) : [])
                    setIsLoading(false)
                    setIsSuccess(true)
                }, 1000)
                
            })
        }
    }, [searchTerm])

    const cleanSearch = () => {
        setSearchTerm('')
    }

    const onSearch = () => {
        setIsLoading(true)
        setIsSuccess(null)

        api.getMovies()
            .then(res => {
                setTimeout(() => {
                    setFoundData(res ? res.filter(d => d.title.toLowerCase().includes(searchTerm.toLowerCase())) : [])
                    setIsLoading(false)
                    setIsSuccess(true)
                }, 1000)
            })
    }

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return {isLoading, isSuccess, handleSearch, onSearch, cleanSearch, foundData, searchTerm}
}