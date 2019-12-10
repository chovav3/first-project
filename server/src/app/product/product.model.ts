import { Column, Entity, ManyToOne, RelationId } from 'typeorm'
import { App } from '../app.model'
import { Project } from '../project/project.model'

export enum EProductStatus {
  beforeInit = 'beforeInit',
  inProgress = 'inProgress',
  done = 'done'
}

@Entity()
export class Product extends App {

  @RelationId(({ project }: Product) => project)
  projectId: Project['_id']

  @ManyToOne(() => Project)
  project?: Project | Project['_id']

  @Column()
  progress: number

  @Column()
  relativeImportance: number // The number pf importance relative to the other products

  @Column(`enum`, { enum: EProductStatus })
  status: EProductStatus

}

export enum EProductKey {

}