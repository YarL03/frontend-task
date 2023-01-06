import { IBackground, IResponse, IMovie } from "./api.interface"

const api = {
    async getAll(): Promise<IResponse> {
        const res = await fetch('../../api/discover')

        const data: IResponse = await res.json()

        return data
    },

    async getBgImages () : Promise<IBackground[]> {
        const res = await fetch('../../api/discover')
        
        const data: IResponse = await res.json()
        
        return data.backgrounds  
    },

    async getMovies () : Promise<IMovie[]> {
        const res = await fetch('../../api/discover')
        
        const data: IResponse = await res.json()
        
        return data.items 
    },
}

export default api