import React from 'react'
import { storiesOf } from '@storybook/react'
import { AuthForm } from 'components'

storiesOf('AuthForm', module)
  .add('default', () => (
    <AuthForm />
  ))
  .add('reverse', () => (
    <AuthForm reverse />
  ))
