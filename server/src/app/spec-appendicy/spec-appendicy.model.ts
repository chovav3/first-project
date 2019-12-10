import { Column } from 'typeorm'
import { App } from '../app.model'

export enum ESpecAppendicyStatus {
  inProgress = 'inProgress',
  done = 'done'
}

export abstract class SpecAppendicy extends App {

  @Column(`enum`, { enum: ESpecAppendicyStatus })
  status: ESpecAppendicyStatus

  @Column()
  index: number

}