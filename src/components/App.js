import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';
import { AuthPage } from 'components'

const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" component={AuthPage} exact />
      </Switch>
    </Provider>
  )
}

export default App;