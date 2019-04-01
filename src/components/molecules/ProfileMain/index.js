import React from 'react'
import styled from 'styled-components'
import { ProfileField } from 'components'

const Wrapper = styled.div`
  width: 60%;
  height: 1100px;
  float: left;
  padding-left: 40px;
  padding-top: 10px;
  padding-right: 20px;
`

const Headling = styled.h4`
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`

const Photo = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 100px;
  border: 1px solid #CCC;
  background: #CCC;
  margin-left: auto;
  margin-right: auto;
`

const LabelToPhoto = styled.p`
  color: #CCC;
  font-size: 10px;
  text-align: center;
`

const ExtraLabel = styled.label`
  color: #CCC;
  font-size: 10px;
  float: right;
  margin-top: -90px;
  margin-right: 20px;
  user-select: none;
`


const ProfileMain = () => {
	return(
  <Wrapper>
    <Headling>Личные данные</Headling>
    <Photo />
    <LabelToPhoto>Добавить фото<br/>(необязательно)</LabelToPhoto>
    <ProfileField 
      name="lastName"
      label="Фамилия"
      placeholder="Иванов"
    />
    <ProfileField 
      name="firstName"
      label="Имя"
      placeholder="Иван"
    />
    <ProfileField 
      name="middleName"
      label="Отчество (необязательно)"
      placeholder="Александрович"
    />
    <ProfileField 
      name="dayOfBirth"
      label="День рождения"
      placeholder="__.__.____"
    />
    <ProfileField 
      name="sex"
      label="Пол"
      type="select"
    >
      <option>Мужской</option>
      <option>Женский</option>
    </ProfileField>
    <ProfileField 
      name="snils"
      label="СНИЛС (необязательно)"
      placeholder="____-____-____-__"
    />
    <ExtraLabel htmlFor="snils">
      Может пригодиться<br/>для регистрации в мероприятиях
    </ExtraLabel>
    <ProfileField 
      name="medicineContras"
      label="Медицинские противопоказания (необязательно)"
      type="textarea"
      placeholder="Ваши противопоказания"
    />
    <ProfileField 
      name="resident"
      label='Участник "Кружкового Движения" (необязательно)'
      type="select"
    >
      <option>Не указано</option>
      <option>Два</option>
      <option>Три</option>
    </ProfileField>
    <ProfileField 
      name="citizenship"
      label=" Гражданин Российской Федерации"
      type="checkbox"
    />
  </Wrapper>
  )
}

export default ProfileMain