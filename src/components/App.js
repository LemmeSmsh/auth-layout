import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';
import { HomePage} from 'components'
import { AuthPage } from 'components'
import { DepartmentsPage } from 'components'
import { EmployeesPage } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/departments" component={DepartmentsPage} />
          <Route exact path="/employees" component={EmployeesPage} />
          <Route component={HomePage} />
        </Switch>
      </Provider>
    </ThemeProvider>
    
  )
}

export default App;