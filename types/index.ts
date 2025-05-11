export interface AuthenticatedUser {
    id: number
    username: string
    image: string
}


export interface UserProductDTO {
    id: number
    userId: number
    quantity: number
    info: string
    createdAt: string // o Date si lo parseas
    thumbnail: string
    display_name: string
}
