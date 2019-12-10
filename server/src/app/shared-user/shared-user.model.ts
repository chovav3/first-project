import { Column, Entity, OneToOne } from 'typeorm'
import { App } from '../app.model'
import { Project } from '../project/project.model'
import { User } from '../user/user.model'

export enum ESharedUserType {
  productManager = 'productManager',
  CTO = 'CTO',
  CEO = 'CEO',
  characteristics = 'characteristics',
  UXExpert = 'UXExpert',
  designer = 'designer',
  developer = 'developer',
  QA = 'QA',
  other = 'other'
}

@Entity()
export class SharedUser extends App {

  @OneToOne(() => User, { nullable: false })
  user?: User | User['_id']

  @OneToOne(()=>Project)
  project?: Project | Project['_id']

  @Column(`enum`, { enum: ESharedUserType })
  type: ESharedUserType

}