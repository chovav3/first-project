import { App } from '../app.model';
import { Entity, Column, ManyToOne, RelationId, ManyToMany } from 'typeorm';
import { Project } from '../project/project.model';
import { ProjectFile } from '../project-file/project-file.model';

@Entity()
export class Attachment extends App {

  @RelationId(({ projectFiles }: Attachment) => projectFiles)
  projectFileIds: Array<ProjectFile>

  @RelationId(({ project }: Attachment) => project)
  projectId: Project['_id']

  @Column()
  value: string // path || base64

  @Column()
    named: string

  @ManyToOne(() => Project, { nullable: false })
  project?: Project | Project['_id']

  @ManyToMany(() => ProjectFile)
  projectFiles?: Array<ProjectFile | ProjectFile['_id']>

}