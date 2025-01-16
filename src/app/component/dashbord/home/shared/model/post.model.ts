
export interface Post {
    id? : string,
    firstName : string,
    lastName :string,
    email : string,
    contact : string
}


export interface PostinitialStateInterface {
    post : Post[]
}