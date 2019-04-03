import React from 'react'
import styled from 'styled-components'

import { Link, LogoImage, Icon } from 'components'

const Avatar = styled.span`
  background: #CCC;
  border-radius: 100px;
  width: 40px;
  height: 40px;
`

const Greeting = styled.span`
  font-size: 16px;
  margin-left: 30px;
`
const SignWrapper = styled.div`
  position: absolute;
  padding-top: 20px;
  top: 0;
  left: 72%;
`

const SignButton = styled.button`
  height: 30px;
  border-radius: 4px;
  margin-left: 20px;
  margin-bottom: 5px;
  background: black;
  border: 2px solid #333;
  box-shadow: 0 0 2px white;
  color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px white;
  }
`

const NavItem = styled.div`
  display: inline;
  margin-right: 40px;
  font-size: 16px;
  user-select: none;
`

const Wrapper = styled.div`
  margin-left: 10%;
  width: 100%;
`
const Navbar = ({regWindowIsOpened, authWindowIsOpened, openAuthWindow, openRegWindow, logout}) => {
	  return (
        <Wrapper>
        <Link href="/"><LogoImage /></Link>
          <NavItem><Icon icon="find" /></NavItem>
          <NavItem>О ПРОЕКТЕ</NavItem>
          <NavItem>КОНТАКТЫ</NavItem>
          <NavItem>МЕДИА</NavItem>
          {localStorage.getItem('login') ?
            (<SignWrapper>
                 <Greeting>Здравствуйте, {localStorage.getItem('login')}</Greeting>
                 <SignButton onClick={logout}>Выйти</SignButton>         
            </SignWrapper>)
            :
            ((!regWindowIsOpened && !authWindowIsOpened) && (<SignWrapper>
              <SignButton onClick={openAuthWindow}>Войти</SignButton>
              <SignButton onClick={openRegWindow}>Регистрация</SignButton>
            </SignWrapper>))
            }
        </Wrapper>
	  )
}

export default Navbar