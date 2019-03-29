// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { EmployeesPage } from 'components'

storiesOf('EmployeesPage', module)
  .add('default', () => (
    <EmployeesPage />
  ))
