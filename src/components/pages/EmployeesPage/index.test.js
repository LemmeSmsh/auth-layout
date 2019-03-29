// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import EmployeesPage from '.'

it('renders', () => {
  shallow(<EmployeesPage />)
})
