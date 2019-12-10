import { Column, Entity, OneToOne, RelationId } from 'typeorm'
import { App } from '../app.model'
import { SpecAppendicy } from '../spec-appendicy/spec-appendicy.model'
import { SpecUnit } from '../spec-unit/spec-unit.model'

@Entity()
export class SpecIntroPage extends SpecAppendicy{
  @RelationId(({ specUnit }:SpecIntroPage) => specUnit)
  specUnitId: SpecUnit['_id']
  @OneToOne(() => SpecUnit, { nullable: false })
  specUnit?: SpecUnit | SpecUnit['_id']
  @Column({ nullable: true })
  desc: string
}
