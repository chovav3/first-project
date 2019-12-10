import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Max, Min, ValidateNested } from 'class-validator'
import { Column, DeepPartial, Entity, JoinColumn, OneToMany, OneToOne, RelationId } from 'typeorm'
import { App } from '../app.model'
import { Company } from '../company/company.model'
import { Person } from '../person/person.model'
import { Project } from '../project/project.model'

export enum ELanguage {
  he = 'he',
  en = 'en'
}

export enum EUserType {
  company = 'company',
  person = 'person'
}

export class PersonUser implements DeepPartial<Person>{
  @IsString()
  @IsOptional()
  lastName?: Person['lastName']
}

export class CompanyUser implements DeepPartial<Company>{
  user?: Company['user']
}
@Entity()
export class User extends App {

  @OneToMany(() => Project, ({ user }) => user)
  projects?: Array<Project | Project['_id']>
  @OneToOne(() => Company)
  @JoinColumn()
  @ValidateNested()
  company?: CompanyUser
  @OneToOne(() => Person)
  @JoinColumn()
  @ValidateNested()
  person?: PersonUser
  @Column({ nullable: true })
  image?: string
  @Column({ nullable: true })
  logo?: string
  @Column({ nullable: true })
  site?: string
  @Column(`enum`, { enum: EUserType })
  type: EUserType
  @Column()
  named: string // first name for person, title for company
  @Column()
  @IsEmail()
  email: string
  @Column({ nullable: true })
  desc: string
  @Column()
  @IsNotEmpty()
  @IsString()
  password: string
  @Column()
  @Min(100000000)
  @Max(999999999)
  phone: number
  @Column()
  @IsInt()
  @IsPositive()
  callingCode: number
  @Column()
  currency: string
  @Column(`enum`, { enum: ELanguage })
  @IsEnum(ELanguage)
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
  phone = 'phone'
}