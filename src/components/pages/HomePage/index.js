// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { HomeAndAuthTemplate, Header, Button, Link, Heading } from 'components'

const HomePage = () => {
  return (
    <HomeAndAuthTemplate
      header={ <Header /> }  
    >
    <Heading level='1'>Hello!</Heading>
    <Link href="/auth"><Button>Click here to login and start</Button></Link>
    </HomeAndAuthTemplate>
  )
}

export default HomePage
