
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/index'
import Login from './pages/login'
import Signup from './pages/signup'
import Testimony from './pages/testimony'
import Landing from './pages/landing'

const App = () => {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Home" component={Home} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/Signup" component={Signup} exact />
          <Route path="/Testimony" component={Testimony} exact />
          <Route path="/Landing" component={Landing} exact />
        </Switch>
      </Router>
    </div>
  )
}

export default App
