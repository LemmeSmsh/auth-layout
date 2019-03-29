import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { IconLink, Block } from 'components'

const Wrapper = styled(Block)`
  display: block;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 5%;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const Title = styled.h1`
  display: block;
  font-size: 30px;
  margin-left: 5%;
  @media screen and (max-width: 640px) {
    font-size: 22px;
    margin-left: auto;
    margin-right: auto;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Header = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Title>React Data Base</Title>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
