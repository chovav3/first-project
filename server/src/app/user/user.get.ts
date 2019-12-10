import { ISession } from '../session/session.model'
import { User } from './user.model'

export const getUser = ({ userId }: ISession) => {
  if (userId) return User.findOneOrFail(userId)
}