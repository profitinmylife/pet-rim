import {LocationType} from './location.ts'

export type CharacterType = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: LocationType
    location: LocationType
    image: string
    created: string
}
