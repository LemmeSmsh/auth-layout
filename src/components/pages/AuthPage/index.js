import React from 'react'
import styled from 'styled-components'
import { AuthForm, HomeAndAuthTemplate, Nav, Header } from 'components'

import { connect } from 'react-redux'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  float: left;
`


const AuthPage = ({ onAddUser, onWrongField }) => {

  return (
    <HomeAndAuthTemplate
      nav={ <Nav /> }
      header={ <Header /> }
    >
    <Wrapper>
      <AuthForm 
        onAddUser={ onAddUser }
        onWrongField={ onWrongField }
      />
    </Wrapper>
    </HomeAndAuthTemplate>
  )
}

const mapStateToProps = store => ({
    auth: store.auth
})

const mapDispatchToProps = dispatch => ({
    onAddUser: (last, first, day, sx, tele, mail) => {
      dispatch({ type: "ADD_USER", 
        lastName: last, 
        firstName: first, 
        dayOfBirth: day,
        sex: sx,
        phone: tele ,
        email: mail 
      });
    },
    onWrongField: () => {
      dispatch({ type: "WRONG_FIELD" })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);