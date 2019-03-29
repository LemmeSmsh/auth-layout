import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { font, palette } from 'styled-theme'
import { Field, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AuthForm = ({ onCheckAuth }) => {
  let loginInput = "";
  let passwordInput = "";
  const newPath = '/departments'; // New path for redirection

  const reg = /[<>\'\".{}\[\]]/; // RegExp for checking inputs values

  // Updating inner login's value
  const rewriteInnerLogin = event => {
    loginInput = event.target.value;
    console.log(loginInput)
  };

  //Updating inner password's value
  const rewriteInnerPassword = event => {
    passwordInput = event.target.value;
    console.log(passwordInput)
  };

  // Check 'bad symbols' in auth, then comparing to correct login and password 
  const checkAuth = () => { 
      if ( (loginInput.search(reg) == -1 && loginInput.search(reg)) == -1) {
  	    onCheckAuth(loginInput, passwordInput);
        if (sessionStorage.getItem('correctLogin')) {
          window.location.href = newPath;
      };
    } else console.log('Hey, hey, calm down, little buster...');
  };

  return (
    <Wrapper>
      <Field 
        name="authLogin"
        label="Login:"
        onChange={ rewriteInnerLogin }
      />
      <Field 
        name="authPassword"
        label="Password:"
        type="password"
        onChange={ rewriteInnerPassword }
      />
      <Button onClick={ checkAuth }>Login</Button>
    </Wrapper>
  )
}

AuthForm.propTypes = {
  reverse: PropTypes.bool,
}

export default AuthForm;