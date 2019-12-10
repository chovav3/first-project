import { Column, Entity, OneToOne, RelationId } from 'typeorm'
import { SpecAppendicy } from '../spec-appendicy/spec-appendicy.model'
import { SpecUnit } from '../spec-unit/spec-unit.model'

@Entity()
export class SpecMainPage extends SpecAppendicy{
  
  @RelationId(({ specUnit }:SpecMainPage) => specUnit)
  specUnitId: SpecUnit['_id']
  @OneToOne(() => SpecUnit, { nullable: false })
  specUnit?: SpecUnit | SpecUnit['_id']

  @Column()
  title: string

  @Column({ nullable: true })
  subtitle: string

  @Column({ nullable: true })
  userInfo: string

  @Column({ nullable: true })
  site: string

  @Column({ nullable: true })
  logo: string

  @Column({ nullable: true })
  userDesc: string

}