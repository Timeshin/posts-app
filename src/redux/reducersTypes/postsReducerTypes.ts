export interface IPosts {
  id: number
  name: string
  userName: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  photo?: IPostPhoto
  description?: IPostDescription
}

export interface IPostPhoto {
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface IPostDescription {
  userId: number
  id: number
  title: string
  body: string
}

export interface IPostsState {
  posts: IPosts[]
  error: string
  loading: boolean
}
