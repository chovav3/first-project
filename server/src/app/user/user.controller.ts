import { Body, Controller, Get, Post, Session } from '@nestjs/common'
import { ISession } from '../session/session.model'
import { getUser } from './user.get'
import { authUser, AuthUserDto, createUser, CreateUserDto } from './user.post'

@Controller('user')
export class UserController {

  @Get()
  getUser(@Session() session: ISession) {
    return getUser(session)
  }

  @Post()
  createUser(@Body() body: CreateUserDto, @Session() session: ISession) {
    return createUser(body, session)
  }

  @Post(`auth`)
  authUser(@Body() body: AuthUserDto, @Session() session: ISession) {
    return authUser(body, session)
  }

}