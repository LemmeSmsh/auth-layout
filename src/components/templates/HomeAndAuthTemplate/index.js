// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

const Wrapper = styled.div`
  display: block;
  flex-direction: column;
  padding-top: 3.75rem;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Header = styled.header`
  position: relative;
  float: left;
  top: 0;
  width: 100%;
  z-index: -999;
`

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  heigth: 50px;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto 0 auto;
  max-width: ${size('maxWidth')};
`

const HomeAndAuthTemplate = ({
  nav, header, children, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Nav>{ nav }</Nav>
      <Content>{children}</Content>
    </Wrapper>
  )
}

HomeAndAuthTemplate.propTypes = {
  header: PropTypes.node.isRequired,
}

export default HomeAndAuthTemplate
