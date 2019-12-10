import { Column, Entity, OneToOne, RelationId } from 'typeorm'
import { App } from '../app.model'
import { Person } from '../person/person.model'
import { User } from '../user/user.model'

@Entity()
export class Company extends App{

  @RelationId(({ user }: Person) => user)
  userId: User['_id']

  @OneToOne(() => User)
  user?: User | User['_id']

}