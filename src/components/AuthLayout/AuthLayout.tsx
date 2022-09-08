import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import useLocalStorage from 'src/hooks/useLocalStorage'
import { setLoginUser } from 'src/redux/actions'

import { AuthHeader, Container, Content, GridLayout } from '../'

const AuthLayout = () => {
  const isUserLogined = useAppSelector(({ userReducer }) => userReducer.isLogined)
  const dispatch = useAppDispatch()
  const naviagte = useNavigate()
  const [keyValue] = useLocalStorage('isLogined')

  useEffect(() => {
    if(keyValue || isUserLogined) {
      dispatch(setLoginUser(true))
      return
    }

    naviagte('autorization', { replace: true })
  }, [keyValue, isUserLogined, naviagte, dispatch])

  return (
    <GridLayout>
      <AuthHeader />

      <Container>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </GridLayout>
  )
}

export default AuthLayout