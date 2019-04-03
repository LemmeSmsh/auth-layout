import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { Block, LogoImage, Icon, Navbar } from 'components'

const Wrapper = styled(Block)`
  display: block;
  justify-content: center;
  padding: 0.5rem;
  background: black;
  height: 50px;
  margin: 0;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
  border-bottom: 1px solid #333;
`

const InnerWrapper = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  height: 50px;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Nav = (props) => {

  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Navbar
          logout={props.logout} 
          regWindowIsOpened={props.regWindowIsOpened}
          authWindowIsOpened={props.authWindowIsOpened}
          openAuthWindow={props.openAuthWindow}
          openRegWindow={props.openRegWindow}
        />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Nav
