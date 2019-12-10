import React, { FunctionComponent, useContext } from 'react'
import { Redirect } from 'react-router'
import { UserContext } from '../context/user'

export class AuthGuardProps {
  onlyAuthenticated?: boolean
}

const AuthGuard: FunctionComponent<AuthGuardProps> = ({ children, onlyAuthenticated = true }) => {
  const { _id } = useContext(UserContext)
  return _id && onlyAuthenticated || !onlyAuthenticated && !_id ?
    <>{children}</> :
    <Redirect to={onlyAuthenticated ? `/login` : ``} />  
}

export default AuthGuard