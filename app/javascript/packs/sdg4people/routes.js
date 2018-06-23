import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Reports from './components/Reports';
import NewReport from './components/NewReport';
const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={Reports} />
      <Route exact path='/reports/new' component={NewReport} />
    </div>
  </Router>
)
export default App;
