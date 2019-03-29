// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { AuthPage } from 'components'

storiesOf('AuthPage', module)
  .add('default', () => (
    <AuthPage />
  ))
