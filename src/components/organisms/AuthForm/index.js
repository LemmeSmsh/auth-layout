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
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  width: 480px;
  float: left;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  margin-top: -150px;
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


const AuthForm = ({ onAddUser, onWrongField }) => {
  
  let data = {
    lastName:  "",
    firstName: "",
    dayOfBirth:  "",
    sex:  "Мужской",
    phone:  "",
    email:  "",
  }
  let emptyField = false;

  const newPath = '/profile'; // New path for redirection

  const reg = /[<>\'\"{}\[\]]/; // RegExp for checking inputs values

  const warning = element => {
    if (element.value == "") element.style.border = "1px solid red";
    else element.style.border = "1px solid #CCC";
  }

  // Inserting values in inner various 
  const onBlurLastName = event => {
    data.lastName = event.target.value;
    warning(event.currentTarget);
  }
  const onBlurFirstName = event => {
    data.firstName = event.target.value;
    warning(event.currentTarget); 
  }
  const onBlurDayOfBirth = event => {
    data.dayOfBirth = event.target.value;
    warning(event.currentTarget);
  }
  const onBlurSex = event => {
    data.sex = event.target.value;
    warning(event.currentTarget);
  }
  const onBlurPhone = event => {
    data.phone = event.target.value;
    warning(event.currentTarget);
  }
  const onBlurEmail = event => {
    data.email = event.target.value;
    warning(event.currentTarget);
  }

  const auth = () => {
    emptyField = false;
    _.map(data, (item, key) => {
      if (item == "" | item.search(reg) != -1) {
        emptyField = true;
        document.getElementById(key).style.border = '1px solid red';
        console.log(key);
      }
    });
    if (emptyField == false) {
        onAddUser(data.lastName, data.firstName, data.dayOfBirth, data.sex, data.phone, data.email);
        window.location.href = newPath;
    } else { 
        onWrongField; 
      };
  };

  return (
    <Wrapper>
    <CloseIcon icon="close" />
    <Headling>РЕГИСТРАЦИЯ</Headling>
      <Input 
        name="lastName"
        placeholder="Фамилия"
        onBlur={onBlurLastName}
        id="lastName"
      />
      <Input 
        name="firstName"
        placeholder="Имя"
        onBlur={onBlurFirstName}
        id="firstName"
      />
      <InputWrapper>
        <InputSmall 
          name="dayOfBirth"
          placeholder="Дата рождения"
          onBlur={onBlurDayOfBirth}
          id="dayOfBirth"
          />
        <InputSmall
          name="sex"
          type="select"
          defaultValue="Мужской"
          onBlur={onBlurSex}
          id="sex"
          >
            <PlaceholderOption selected disabled>Пол</PlaceholderOption>
            <Option>Мужской</Option>
            <Option>Женский</Option>
          </InputSmall>
        </InputWrapper>
        <Input
          name="phone"
          placeholder="Телефон"
          onBlur={onBlurPhone}
          id="phone"
        />
        <Input
          name="email"
          placeholder="E-mail"
          onBlur={onBlurEmail}
          id="email"
        />

      <Button onClick={ auth }>Регистрация</Button>
      {emptyField && <p>Заполните все поля для регистрации</p>}
      <HR/>
      <Paragraph>Уже есть аккаунт? <Link href="#">Войти</Link></Paragraph>
    </Wrapper>
  )
}

AuthForm.propTypes = {
  reverse: PropTypes.bool,
}

export default AuthForm;