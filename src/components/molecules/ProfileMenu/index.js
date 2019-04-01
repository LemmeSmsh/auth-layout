import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ProfileMenuItem } from 'components'

const Wrapper = styled.div`
  float: left;
  width: 30%;
  border-right: 1px solid #CCC;
  padding-top: 25px;
  height: 460px;
`

const ProfileMenu = () => {
  return (
    <Wrapper>
        <ProfileMenuItem>Личные данные</ProfileMenuItem>
        <ProfileMenuItem>Адрес проживания</ProfileMenuItem>
        <ProfileMenuItem>Контакты</ProfileMenuItem>
        <ProfileMenuItem>Социальные сети</ProfileMenuItem>
        <ProfileMenuItem>О себе</ProfileMenuItem>
        <ProfileMenuItem>Образование</ProfileMenuItem>
        <ProfileMenuItem>Опыт и достижения</ProfileMenuItem>
        <ProfileMenuItem>Работа</ProfileMenuItem>
        <ProfileMenuItem>Активности</ProfileMenuItem>
    </Wrapper>
  )
}

export default ProfileMenu
