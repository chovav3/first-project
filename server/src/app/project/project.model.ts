import { Column, Entity, ManyToMany, ManyToOne, OneToMany, RelationId } from 'typeorm'
import { App } from '../app.model'
import { Attachment } from '../attachment/attachment.model'
import { Product } from '../product/product.model'
import { ProjectFile } from '../project-file/project-file.model'
import { SharedUser } from '../shared-user/shared-user.model'
import { User } from '../user/user.model'

export enum EProjectStatus {
  beforeInit = 'beforeInit',
  inProgress = 'inProgress',
  done = 'done'
}

@Entity()
export class Project extends App {

  @RelationId(({ updateContentUser }: Project) => updateContentUser)
  updateContentUserId: User['_id']

  @RelationId(({ attachments }: Project) => attachments)
  attachmentIds: Array<Attachment['_id']>

  @RelationId(({ products }: Project) => products)
  productIds: Array<Product['_id']>

  @RelationId(({ sharedUsers }: Project) => sharedUsers)
  sharedUserIds: Array<SharedUser['_id']>

  @RelationId(({ user }: Project) => user)
  userId: User['_id']

  @ManyToOne(() => User)
  user?: User | User['_id']

  @ManyToOne(() => User)
  updateContentUser?: User | User['_id']

  @ManyToMany(() => User)
  sharedUsers?: Array<SharedUser | SharedUser['_id']>

  @OneToMany(() => Product, ({ project }) => project)
  products?: Array<Product | Product['_id']>

  @OneToMany(() => Attachment, ({ project }) => project)
  attachments?: Array<Attachment | Attachment['_id']>

  @OneToMany(() => ProjectFile, ({ project }) => project)
  projectFiles?: Array<ProjectFile | ProjectFile['_id']>

  @Column(`text`, { nullable: true, array: true })
  images: Array<string>

  @Column({ default: 'en' })
  language: string

  @Column(`enum`, { enum: EProjectStatus })
  status: EProjectStatus

  @Column()
  named: string

  @Column()
  updateContentDate: string

  @Column()
  archived: boolean

}

export enum EProjectKey {
  updateContentUserId = 'updateContentUserId',
  productIds = 'productIds',
  sharedUserIds = 'sharedUserIds',
  userId = 'userId',
  user = 'user',
  updateContentUser = 'updateContentUser',
  sharedUsers = 'sharedUsers',
  products = 'products',
  images = 'images',
  language = 'language',
  status = 'status',
  named = 'named',
  progress = 'progress',
  updateContentDate = 'updateContentDate',
  archived = 'archived'
}