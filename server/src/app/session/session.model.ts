import { Column, Entity, PrimaryColumn } from 'typeorm'
import { User } from '../user/user.model'

@Entity()
export class Session {

  @PrimaryColumn()
  sid: string

  @Column(`json`)
  sess: object

  @Column(`timestamp`)
  expire: Date

}

export interface ISession extends Express.Session {
  userId?: User['_id']
}

export enum ESessionKey {
  userId = 'userId'
}