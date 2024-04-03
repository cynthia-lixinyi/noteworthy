import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DemoPage from './pages/DemoPage';
import MembersPage from './pages/MembersPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/demo" component={DemoPage} />
            <Route path="/members" component={MembersPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
