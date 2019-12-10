import { Column, Entity, OneToOne, RelationId } from 'typeorm'
import { SpecAppendicy } from '../spec-appendicy/spec-appendicy.model'
import { SpecUnit } from '../spec-unit/spec-unit.model'

@Entity()
export class SpecGeneralPage extends SpecAppendicy{
  
  @RelationId(({ specUnit }:SpecGeneralPage) => specUnit)
  specUnitId: SpecUnit['_id']
  @OneToOne(() => SpecUnit, { nullable: false })
  specUnit?: SpecUnit | SpecUnit['_id']
  @Column({ nullable: true })
  desc: string

}
