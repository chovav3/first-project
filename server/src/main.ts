import * as connectPgSimple from 'connect-pg-simple'
import * as session from 'express-session'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DATABASE_URL, PORT, PRODUCTION, SECRET } from './main.constants'
import { MainModule } from './main.module'

NestFactory.create<NestExpressApplication>(MainModule).then(instance => {
  const PGStore = connectPgSimple(session)
  instance.
    useStaticAssets(`public`).
    enableCors({
      credentials: true,
      origin: true
    }).
    useGlobalPipes(new ValidationPipe()).
    use(session({
      store: new PGStore({
        conObject: {
          connectionString: DATABASE_URL,
          ssl: PRODUCTION
        }
      }),
      secret: SECRET,
      cookie: {
        maxAge: 2 * 365 * 24 * 60 * 60 * 1000,
        secure: false
      },
      resave: false,
      saveUninitialized: false
    })).
    listen(PORT)
})