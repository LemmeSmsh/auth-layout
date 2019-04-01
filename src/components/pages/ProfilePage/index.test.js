// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import ProfilePage from '.'

it('renders', () => {
  shallow(<ProfilePage />)
})
