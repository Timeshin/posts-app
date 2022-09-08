import { FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { ItemWrapper, Form, Input } from "src/components"
import { useAppDispatch, useAppSelector } from "src/hooks"
import useLocalStorage from "src/hooks/useLocalStorage"
import { setLoginUser } from "src/redux/actions"

const AuthPage = () => {
  const [error, setError] = useState<string>()
  const { login, password, isLogined } = useAppSelector(({ userReducer }) => userReducer)
  const dispatch = useAppDispatch()
  const [_, setValue] = useLocalStorage('isLogined')
  const naviagte = useNavigate()

  useEffect(() => {
    if(isLogined) naviagte('/')
  }, [isLogined, naviagte])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)
    const loginValue = data.get('login') as string
    const passwordValue = data.get('password') as string

    if(!loginValue.trim() || !passwordValue.trim()) {
      setError('Empty input!')
    } else if (loginValue !== login || passwordValue !== password) {
      setError('Incorrect data, try again!')
    } else {
      setError('')
      naviagte('/')
      setValue('true')
      dispatch(setLoginUser(true))
    }
  }

  return (
    <ItemWrapper padding="0">
      <Form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <p>Authorization</p>
        <div className="form-filed">
          <p>
            login
          </p>
          <Input type='text' name='login' />
        </div>
        <div className="form-filed">
          <p>
            password
          </p>
          <Input type='password' name='password' />
        </div>
        {
          error &&
            <p className="error">{error}</p>
        }
        <button type='submit'>Submit</button>
      </Form>
    </ItemWrapper>
  )
}

export default AuthPage