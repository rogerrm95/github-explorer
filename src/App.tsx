import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Pages //
import LandingPage from './pages/Home'
import Repositories from './pages/Repositories';

import '../src/styles/global.scss'

function App() {
  return (
    <div id='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/repositories' exact component={Repositories} />
          <Route path='/repositories/:login' component={Repositories} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;