import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  float: left;
  width: 100%;
  margin-top: -48vh;
`

const Scale = styled.div`
  border-radius: 60px;
  border: 2px solid white;
  width: 35%;
  height: 22px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(90deg, #fff 60%, rgba(0, 0, 0, 0%) 0%);
`

const ProfileStat = ({ percentage }) => {
  return (
    <Wrapper>
      <p>Профиль заполнен на {percentage} %</p>
      <Scale />
    </Wrapper>
  )
}

export default ProfileStat
