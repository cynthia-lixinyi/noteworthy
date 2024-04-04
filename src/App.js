import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Demo from './pages/Demo';
import Members from './pages/Members';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/demo" component={Demo} />
            <Route exact path="/members" component={Members} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
