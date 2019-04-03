import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux';
import _ from 'lodash'
import { font, palette } from 'styled-theme'
import { Input, Button, InputSmall, CloseIcon } from 'components'

const PlaceholderOption = styled.option`
  display: none;
  color: grey;
`

const HR = styled.hr`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background: black;
`

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  margin: 0;
  float: left;
  background: rgba(0,0,0,30%);
  position: absolute;
  padding-top: 25vh;
  top: 0;
  left: 0;
`

const InnerWrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  padding: 40px 60px 10px 60px;
  background: white;
`

const InputWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`

const Headling = styled.h3`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  text-align: center;
  margin-bottom: 7%;
  letter-spacing: 0.05rem;
`

const Option = styled.option`
  color: black;
`
const Link = styled.a`
  color: cadetblue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Paragraph = styled.p`
  text-align: center;
`


const AuthForm = ({ onAddUser, closeRegWindow, login }) => {
  
  let name = "";

  const newPath = '/profile'; // New path for redirection

  const regName = /[^а-яА-Я]/; //RegExp for names

  const auth = () => {
    if (name != "") {
      localStorage.setItem('login', name);
      window.location.href = newPath;
    }
  };

  const changeInnerName = (event) => {
    name = event.target.value;
  }

  return (
    <Wrapper>
      <InnerWrapper>
      <CloseIcon icon="close" onClick={closeRegWindow}/>
        <Input 
          name="firstName"
          onChange={changeInnerName}
          id="firstName"
          label="Введите имя"
        />
      <Button onClick={ auth }>Вход</Button>
      <HR/>
      <Paragraph>Забыли пароль? <Link href="#">Восстановить</Link></Paragraph>
      </InnerWrapper>
    </Wrapper>
  )
}

export default AuthForm;