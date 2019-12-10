import { Entity, ManyToOne, OneToOne, RelationId } from 'typeorm'
import { App } from '../app.model'
import { SpecIntroPage } from '../spec-intro-page/spec-intro-page.model'
import { SpecMainPage } from '../spec-main-page/spec-main-page.model'
import { Spec } from '../spec/spec.model'

@Entity()
export class SpecUnit extends App {

  @RelationId(({ spec }: SpecUnit) => spec)
  specId: Spec['_id']

  @RelationId(({ mainPage }: SpecUnit) => mainPage)
  mainPageId: SpecMainPage['_id']

  @RelationId(({ introPage }: SpecUnit) => introPage)
  introPageId: SpecIntroPage['_id']

  @ManyToOne(() => Spec, { nullable: false })
  spec?: Spec | Spec['_id']

  @OneToOne(() => SpecMainPage)
  mainPage?: SpecMainPage | SpecMainPage['_id']

  @OneToOne(() => SpecIntroPage)
  introPage?: SpecIntroPage | SpecIntroPage['_id']

}