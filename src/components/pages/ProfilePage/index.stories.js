// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ProfilePage } from 'components'

storiesOf('ProfilePage', module)
  .add('default', () => (
    <ProfilePage />
  ))
