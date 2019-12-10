import { App } from './app.model'
import { Company } from './company.model'
import { Person } from './person.model'
import { Project } from './project.model'

export enum EUserType {
  company = 'company',
  person = 'person'
}

export enum ELanguage {
  he = 'he',
  en = 'en'
}

export class User extends App {
  projects?: Array<Project | Project['_id']>
  company?: Company['_id'] | Company
  person?: Person['_id'] | Person
  image?: string
  logo?: string
  site?: string
  type: EUserType
  named: string // first name for person, title for company
  email: string
  desc: string
  password: string
  phone: number
  callingCode: number
  currency: string
  language: ELanguage
}

export enum EUserKey {
  projects = 'projects',
  company = 'company',
  person = 'person',
  image = 'image',
  logo = 'logo',
  site = 'site',
  type = 'type',
  named = 'named',
  email = 'email',
  desc = 'desc',
  password = 'password',
  phone = 'phone',
  callingCode = 'callingCode',
  currency = 'currency'
}