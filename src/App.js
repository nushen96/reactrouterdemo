import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import Shop from './Shop'
import About from './About'
import Nav from "./Nav"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/shop" component={Shop}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
  <div>
    <h1>Home Page</h1>
  </div>)
}

export default App;
