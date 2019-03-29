// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

//const Hero = styled.section``

//const Sponsor = styled.section``

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: ${size('maxWidth')};
`

const HomeAndAuthTemplate = ({
  header, children, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
    </Wrapper>
  )
}

HomeAndAuthTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  //hero: PropTypes.node,
  //sponsor: PropTypes.node,
}

export default HomeAndAuthTemplate
