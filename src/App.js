
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Find from './pages/index'
import Login from './pages/login'
import Signup from './pages/signup'
import About from './pages/about'
import Home from './pages/landing'

const App = () => {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Find" component={Find} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/Signup" component={Signup} exact />
          <Route path="/About" component={About} exact />
          <Route path="/Home" component={Home} exact />
        </Switch>
      </Router>
    </div>
  )
}

export default App
