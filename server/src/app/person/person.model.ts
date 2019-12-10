import { IsNotEmpty, IsString } from 'class-validator'
import { Column, Entity, OneToOne, RelationId } from 'typeorm'
import { App } from '../app.model'
import { User } from '../user/user.model'

@Entity()
export class Person extends App {

  @RelationId(({ user }: Person) => user)
  userId?: User['_id']

  @OneToOne(() => User)
  user?: User | User['_id']

  @Column()
  @IsString()
  lastName: string

}