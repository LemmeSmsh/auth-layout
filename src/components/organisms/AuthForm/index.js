import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { font, palette } from 'styled-theme'
import { Input, Button, InputSmall } from 'components'

const Body = styled.div`
  background: black;
  margin: 0;
`

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
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  padding: 10px 60px 10px 60px;
  margin-top: 10%;
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


const AuthForm = ({ onCheckAuth }) => {
  let loginInput = "";
  let passwordInput = "";
  const newPath = '/departments'; // New path for redirection

  const reg = /[<>\'\".{}\[\]]/; // RegExp for checking inputs values

  // Updating inner login's value
  const rewriteInnerLogin = event => {
    loginInput = event.target.value;
    console.log(loginInput)
  };

  //Updating inner password's value
  const rewriteInnerPassword = event => {
    passwordInput = event.target.value;
    console.log(passwordInput)
  };

  // Check 'bad symbols' in auth, then comparing to correct login and password 
  const checkAuth = () => { 
      if ( (loginInput.search(reg) == -1 && loginInput.search(reg)) == -1) {
  	    onCheckAuth(loginInput, passwordInput);
        if (sessionStorage.getItem('correctLogin')) {
          window.location.href = newPath;
      };
    } else console.log('Hey, hey, calm down, little buster...');
  };

  return (
    <Body>
    <Wrapper>
    <Headling>РЕГИСТРАЦИЯ</Headling>
      <Input 
        name="authLogin"
        placeholder="Фамилия"
        onChange={ rewriteInnerLogin }
      />
      <Input 
        name="authPassword"
        placeholder="Имя"
        onChange={ rewriteInnerPassword }
      />
      <InputWrapper>
        <InputSmall 
          name="dayOfBirth"
          placeholder="Дата рождения"
          />
        <InputSmall
          name="sex"
          type="select"
          defaultValue="Пол"
          >
            <PlaceholderOption>Пол</PlaceholderOption>
            <Option>Мужской</Option>
            <Option>Женский</Option>
          </InputSmall>
        </InputWrapper>
        <Input
          name="phone"
          placeholder="Телефон"
        />
        <Input
          name="email"
          placeholder="E-mail"
        />

      <Button onClick={ checkAuth }>Регистрация</Button>
      <HR/>
      <Paragraph>Уже есть аккаунт? <Link href="#">Войти</Link></Paragraph>
    </Wrapper>
    </Body>
  )
}

AuthForm.propTypes = {
  reverse: PropTypes.bool,
}

export default AuthForm;