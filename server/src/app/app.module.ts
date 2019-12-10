import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DATABASE_URL, PRODUCTION } from '../main.constants'
import { UserController } from './user/user.controller'

const searchInDist = (prefix: string) => `dist/**/**.${prefix}.js`

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: DATABASE_URL,
      entities: [searchInDist(`model`)],
      synchronize: true,
      logging: true,
      ssl: PRODUCTION,
      dropSchema: false
    })],
  controllers: [UserController],
  providers: [],
})
export class AppModule { }
