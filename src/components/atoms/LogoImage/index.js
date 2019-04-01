import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-top: 5px;
  margin-right: 8%;
`

const LogoImage = props => <Logo alt="Logo" {...props} src={logo} />

export default LogoImage
