import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';
import { AuthPage, ProfilePage } from 'components'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    background: #F2F2F2;
  }
`

const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" component={AuthPage} exact>
          <Route path="profile" component={ProfilePage} />
        </Route>
      </Switch>
    </Provider>
  )
}

export default App;