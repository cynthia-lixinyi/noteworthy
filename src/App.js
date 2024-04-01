import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import DemoPage from './components/DemoPage';
import MembersPage from './components/MembersPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/demo" component={DemoPage} />
            <Route path="/members" component={MembersPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
