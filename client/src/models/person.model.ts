import { App } from './app.model'

export class Person extends App{
  lastName: string
}

export enum EPersonKey {
  lastName = 'lastName'
}