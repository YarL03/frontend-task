import { useState, useEffect } from 'react';

export const useQuery = <R>(effect: (<T>(initial: T) => Promise<T>) | (() => Promise<any>), param?: any, dep?: any) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<R | null>(null)

    useEffect(() => {
        setIsLoading(true)

        effect(param)
        .then(res => {
            
            setTimeout(() => {
                setIsLoading(false)
                setData(res)
            }, 1000)
        })
    }, [dep])

    return {isLoading, data}
}