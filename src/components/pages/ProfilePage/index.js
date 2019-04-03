import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { HomeAndAuthTemplate, Header, Nav, 
         ProfileStat, ProfileMenu, ProfileField, ProfileInput, ProfileMain } from 'components'

const Wrapper = styled.div`
  width: 100%;
  display: block;
  float: left;
  padding-left: 15%;
  padding-right: 15%;
  margin-top: -15vh;
  margin-left: auto;
  margin-right: auto;
  font-family: Arial;
`

const ProfileWindow = styled.div`
  width: 70%;
  border-radius: 6px;
  border: 1px solid #CCC;
  height: 1100px;
  background: white;
`

class ProfilePage extends React.Component {

	constructor(props) {
		super(props);

    this.logout = this.logout.bind(this);
	}

  logout() {
    localStorage.removeItem('login');
    window.location.href = '/';
  }

    render() {
      return (
        <HomeAndAuthTemplate
          nav={ <Nav logout={this.logout}/> }
          header={ <Header /> }
        >
        <ProfileStat percentage={60}/>
        <Wrapper>
          <ProfileWindow>
            <ProfileMenu />
            <ProfileMain />
          </ProfileWindow>
        </Wrapper>
        </HomeAndAuthTemplate>
      )
    }
}

const mapStateToProps = store => ({
	auth: store.auth
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);