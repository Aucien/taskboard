import React from 'react';
import Homepage from './components/Homepage';
import Taskpage from './components/Taskpage';
import CreateTask from './components/CreateTask';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/task/:id' component={Taskpage} />
          <Route path='/createTask' component={CreateTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
