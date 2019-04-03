import React, { Component } from 'react'
import styled from 'styled-components'
import { AuthForm, HomeAndAuthTemplate, Nav, Header, RegForm } from 'components'

import { connect } from 'react-redux'


const RegWindow = styled.div`
  width: 100%;
  display: flex;
  float: left;
  background: rgba(0,0,0,30%);
  position: absolute;
  top: 0;
`


class AuthPage extends React.Component {
  
    constructor(props) {
  super(props);

  this.openRegWindow = this.openRegWindow.bind(this);
  this.closeRegWindow = this.closeRegWindow.bind(this);
  this.openAuthWindow = this.openAuthWindow.bind(this);
  this.closeAuthWindow = this.closeAuthWindow.bind(this);
  this.login = this.login.bind(this);
  this.logout = this.logout.bind(this);

  this.state = {
        regWindowIsOpened: false,
        authWindowIsOpened: false,
        logged: false,
    }
  }

  openRegWindow() {
    this.setState({regWindowIsOpened: true});
  }
  closeRegWindow() {
    this.setState({regWindowIsOpened: false});
  }

  openAuthWindow() {
    this.setState({authWindowIsOpened: true});
  }
  closeAuthWindow() {
    this.setState({authWindowIsOpened: false});
  }

  login() {
    this.setState({logged: true});
  }
  logout() {
    this.setState({logged: false});
    localStorage.removeItem('login');
  }

  render() {
    return (
      <HomeAndAuthTemplate
        nav={ <Nav
                logout={this.logout}
                onAddUser={this.props.onAddUser}
                regWindowIsOpened={this.state.regWindowIsOpened}
                authWindowIsOpened={this.state.authWindowIsOpened}
                openAuthWindow={this.openAuthWindow}
                openRegWindow={this.openRegWindow}
              />
            }
        header={ <Header /> }
      >

      {this.state.authWindowIsOpened && 
        <AuthForm 
          onAddUser={this.props.onAddUser} 
          login={this.login} 
          closeAuthWindow={this.closeAuthWindow}/>}
      {this.state.regWindowIsOpened && 
        <RegForm 
            onAddUser={this.props.onAddUser}
            login={this.login} 
            closeRegWindow={this.closeRegWindow}/>}
      </HomeAndAuthTemplate>
    )
  }
}

const mapStateToProps = store => ({
    auth: store.auth
})

const mapDispatchToProps = dispatch => ({
    onAddUser: (data) => {
      dispatch({ type: "ADD_USER", 
        lastName: data.lastName, 
        firstName: data.firstName, 
        dayOfBirth: data.dayOfBirth,
        sex: data.sex,
        phone: data.phone ,
        email: data.email 
      });
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);