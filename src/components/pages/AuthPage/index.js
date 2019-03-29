// https://github.com/diegohaz/arc/wiki/Atomic-Design
// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { HomeAndAuthTemplate } from 'components'
import { Header } from 'components' 
import { AuthForm } from 'components'

import { connect } from 'react-redux'

const AuthPage = ({ onCheckAuth }) => {
  return (
      <HomeAndAuthTemplate
        header={ <Header /> }     
      >
      <AuthForm 
        onCheckAuth={ onCheckAuth }
      />
      </HomeAndAuthTemplate>
  )
}

const mapStateToProps = store => {
	console.log(store);
	return {
    auth: store.auth,
  };
}

const mapDispatchToProps = dispatch => ({
    onCheckAuth: (log, pass) => {
      dispatch({ type: 'CHECK_LOGIN', login: log, password: pass });
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);