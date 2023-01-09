import {
  Exclude,
  Expose,
  instanceToInstance,
  instanceToPlain,
  plainToInstance,
  Type
} from 'class-transformer'

@Exclude()
export class User {
  @Expose({ name: 'name' })
  public username: string

  @Expose({ groups: ['admins'] })
  public password: string

  @Expose({ groups: ['users', 'admins'] })
  public age: number

  @Expose()
  @Type(() => Date)
  public date: Date

  constructor(username: string, password: string, age: number, date: Date) {
    this.username = username
    this.password = password
    this.age = age
    this.date = date
  }
  getName() {
    return this.username
  }
  isAdult() {
    return this.age > 36 && this.age < 60
  }
}

const plainUser = {
  username: 'hello',
  name: 'coder',
  password: '123',
  age: 12,
  date: '2018-04-04T16:00:00.000Z'
}
// plainToInstance
const user: User = plainToInstance(User, plainUser, {
  excludeExtraneousValues: true,
  groups: ['users']
})
console.log('user1:', user)
// const user2: User = plainToInstance(User, plainUser, {
//   excludeExtraneousValues: true,
//   groups: ['admins']
// })
// console.log('user2:', user2)
// const plainUsers = [
//   {
//     username: 'coder1',
//     password: '123',
//     age: 18
//   },
//   {
//     username: 'coder2',
//     password: '123',
//     age: 30
//   }
// ]
// const userList: User[] = plainToInstance(User, plainUsers)
// console.log(userList)

// InstanceToPlain
// const instanceUser1 = new User('coder3', '123', 33)
// const plain = instanceToPlain(instanceUser1)
// // console.log(plain.getName())
//
// // InstanceToInstance
// const instanceUser2 = new User('coder4', '123', 33)
// const instanceUser3 = instanceToInstance(instanceUser2)
// console.log(instanceUser3.isAdult())
