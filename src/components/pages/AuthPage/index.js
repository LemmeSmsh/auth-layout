import React from 'react'
import { AuthForm } from 'components'

import { connect } from 'react-redux'

const AuthPage = ({ onCheckAuth }) => {
  return (
      <AuthForm 
        onCheckAuth={ onCheckAuth }
      />
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