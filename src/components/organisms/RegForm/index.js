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


const RegForm = ({ onAddUser, closeRegWindow, login }) => {
  
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

  const regSymblols = /[<>\'\"{}\[\]]/; // RegExp for checking inputs values
  const regPhone = /[^0-9+]/; //RegExp for phone
  const regBirth = /[^0-9.]/; //RegExp for day of birth
  const regName = /[^а-яА-Я]/; //RegExp for names

  const warning = (element) => {
    if (element.value == "") element.style.border = "1px solid red";
    else element.style.border = "1px solid #CCC";
  }

  const warningWithReg = (element, reg) => {
    if (element.value == "" | element.value.search(reg) != -1) element.style.border = "1px solid red";
    else element.style.border = "1px solid #CCC";
  }

  const checkField = (element, reg) => {
    console.log(element.value);
    if (!reg) warning(element);
    else warningWithReg(element, reg);
  }

  // Inserting values in inner various 
  const onBlurLastName = event => {
    data.lastName = event.target.value;
    checkField(event.currentTarget, regName);
  }
  const onBlurFirstName = event => {
    data.firstName = event.target.value;
    checkField(event.currentTarget, regName); 
  }
  const onBlurDayOfBirth = event => {
    data.dayOfBirth = event.target.value;
    checkField(event.currentTarget, regBirth);
  }
  const onBlurSex = event => {
    data.sex = event.target.value;
  }
  const onBlurPhone = event => {
    data.phone = event.target.value;
    checkField(event.currentTarget, regPhone);
  }
  const onBlurEmail = event => {
    data.email = event.target.value;
    checkField(event.currentTarget);
  }

  const registration = () => {
    emptyField = false;
    console.log(data);
    _.map(data, (item, key) => {
      if (item == "") {
        emptyField = true;
        document.getElementById(key).style.border = '1px solid #F22';
      }
    });
    if (emptyField == false) {
        onAddUser({...data});
        localStorage.setItem('login', data.firstName);
        login;
        window.location.href = newPath;
    }
  };

  return (
    <Wrapper>
      <InnerWrapper>
      <CloseIcon icon="close" onClick={closeRegWindow}/>
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

      <Button onClick={ registration }>Регистрация</Button>
      {emptyField && <p>Заполните все поля для регистрации</p>}
      <HR/>
      <Paragraph>Уже есть аккаунт? <Link href="#">Войти</Link></Paragraph>
      </InnerWrapper>
    </Wrapper>
  )
}

RegForm.propTypes = {
  reverse: PropTypes.bool,
}

export default RegForm;