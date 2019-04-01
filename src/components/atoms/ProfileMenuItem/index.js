import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'


const ProfileMenuItem = styled.p`
  height: 30px;
  margin: 0;
  font-size: 14px;
  color: #666;
  font-family: 'Arial';
  padding-left: 10%;
  padding-top: 10%;
  user-select: none;
  
  &:hover {
  	background: #EEE;
  }
`
export default ProfileMenuItem
