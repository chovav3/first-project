import { App } from '../app.model';
import { Entity, ManyToOne, RelationId, Column } from 'typeorm';
import { SpecPltPage } from '../spec-plt-page/spec-plt-page.model';

export enum SpecPltAttrType {
  web = 'web', // Management panel, Website, Responsive website
  tablet = 'tablet', // Tablet, IPad
  phone = 'phone', //Android, I phone, Windows phone.
  watch = 'watch', // Android watch, Apple watch
  tv = 'tv', // Smart TV, Android TV
  other = 'other', // Component, Board, Panel, Product
  languages = 'languages' // English...
}

@Entity()
export class SpecPltAttr extends App {

  @RelationId(({ pltPage }: SpecPltAttr) => pltPage)
  pltPageId: SpecPltPage['_id']

  @ManyToOne(() => SpecPltPage)
  pltPage?: SpecPltPage | SpecPltPage['_id']

  @Column({ default: false })
  checked: boolean

  @Column(`enum`, { enum: SpecPltAttrType })
  type: SpecPltAttrType

  @Column()
  named: string

}