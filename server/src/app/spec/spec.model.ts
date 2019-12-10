import { Entity, ManyToOne, OneToOne, RelationId } from 'typeorm'
import { App } from '../app.model'
import { Product } from '../product/product.model'
import { ProjectFile } from '../project-file/project-file.model'
import { SpecMainPage } from '../spec-main-page/spec-main-page.model'
import { User } from '../user/user.model'

@Entity()
export class Spec extends App{

  @RelationId(({ product }: Spec) => product)
  productId: Product['_id']

  @RelationId(({ user }: Spec) => user)
  userId: User['_id']

  @OneToOne(() => Product)
  product?: Product | Product['_id']

  @ManyToOne(() => User)
  user?: User | User['_id']

}