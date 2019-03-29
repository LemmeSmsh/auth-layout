// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { DepartmentsPage } from 'components'

storiesOf('DepartmentsPage', module)
  .add('default', () => (
    <DepartmentsPage />
  ))
