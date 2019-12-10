import { Entity, OneToMany, OneToOne, RelationId } from 'typeorm'
import { SpecAppendicy } from '../spec-appendicy/spec-appendicy.model'
import { SpecPltAttr } from '../spec-plt-attr/spec-plt-attr.model'
import { SpecUnit } from '../spec-unit/spec-unit.model'

@Entity()
export class SpecPltPage extends SpecAppendicy{

  @RelationId(({ specUnit }:SpecPltPage) => specUnit)
  specUnitId: SpecUnit['_id']
  @OneToOne(() => SpecUnit, { nullable: false })
  specUnit?: SpecUnit | SpecUnit['_id']

  @RelationId(({ attributes }: SpecPltPage) => attributes)
  attributeIds: Array<SpecPltAttr['_id']>

  @OneToMany(() => SpecPltAttr, ({ pltPage }) => pltPage)
  attributes?: Array<SpecPltAttr | SpecPltAttr['_id']>

}
