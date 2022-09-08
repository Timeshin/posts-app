import { useAppDispatch, useAppSelector } from "src/hooks"
import Header from "../styles/Header.styles" 
import HeaderContent from "../styles/HeaderContent.styles"

import logoImage from "../../assets/img/logo.png"
import mobileLogo from "../../assets/icons/mobileLogo.svg"
import exitIcon from "../../assets/icons/exit.svg"
import { setLoginUser } from "src/redux/actions"

const AuthHeader = () => {
  const isUserLogined = useAppSelector(({ userReducer }) => userReducer.isLogined)
  const dispatch = useAppDispatch()
  
  const leaveHandler = () => {
    dispatch(setLoginUser(false))

    localStorage.clear()
  }

  return (
    <Header>
      <HeaderContent>
        <img className="logo" src={logoImage} alt="logo" />
        <img className="mobile-logo" src={mobileLogo} alt="mobileLogo" />
        {
          isUserLogined &&
            <img
              src={exitIcon}
              alt="exit"
              style={{ cursor: 'pointer' }}
              onClick={() => leaveHandler()}
            />
        }
      </HeaderContent>
    </Header>
  )
}

export default AuthHeader