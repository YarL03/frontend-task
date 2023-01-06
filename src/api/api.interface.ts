export interface IBackground {
    url: string
}

export interface IMovie {
    type: 'movie' | 'tvseries'
    title: string
    imdb_rate: number
    is_new?: boolean
    country: string
    year: number
    length: number //sec
    num_seasons: number
    min_age: number
    genres: string[]
    poster: string
    keyframe: string
}

export interface IResponse {
    backgrounds: IBackground[]
    items: IMovie[]
}