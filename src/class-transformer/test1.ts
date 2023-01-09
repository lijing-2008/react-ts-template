import {
  Type,
  plainToClass,
  plainToInstance,
  Transform
} from 'class-transformer'
export class Album {
  id: number

  name: string

  @Transform((value) => {
    console.log('value', value)
    return value
  })
  photos: string[]
  constructor(id: number, name: string, photos: Photo[]) {
    this.id = id
    this.name = name
    this.photos = photos
  }
}
export class Photo {
  id: number
  filename: string

  constructor(id: number, filename: string) {
    this.id = id
    this.filename = filename
  }
}

const plain = {
  id: 1,
  name: 'li',
  photos: [
    {
      id: 11,
      filename: 'hello'
    },
    {
      id: 12,
      filename: 'world'
    }
  ]
}
const album = plainToInstance(Album, plain)

console.log(album)
