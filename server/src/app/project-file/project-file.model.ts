import { Column, Entity, ManyToOne, OneToOne, RelationId } from 'typeorm'
import { App } from '../app.model'
import { Project } from '../project/project.model'
import { SpecMainPage } from '../spec-main-page/spec-main-page.model'
import { User } from '../user/user.model'

@Entity()
export class ProjectFile extends App {

  @RelationId(({ project }: ProjectFile) => project)
    projectId: Project['_id']

  @RelationId(({user }: ProjectFile) => user)
  userId: User['_id']

  @OneToOne(() => User)
  user?: User | User['_id']

  @ManyToOne(() => Project)
  project?: Project | Project['_id']

  @Column()
  value: string

  @Column()
  named: string


}