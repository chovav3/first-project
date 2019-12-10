import { App } from '../app.model';
import { Entity, Column, OneToOne } from 'typeorm';
import { Attachment } from '../attachment/attachment.model';

@Entity()
export class SpecScreen extends App {

  @Column({ nullable: true })
  desc: string

  @Column()
  named: string // default to attachment name

  @Column()
  image: string // path || base64

}