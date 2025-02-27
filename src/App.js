import './App.css';
import NavBar from './components/nav';
import Card from './components/card'
import CardRow from './components/cardRow'
import './index.css'
import Navbar from './components/nav'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Offsets from './Offsets';
// import MarketPlace from './MarketPlace';



// const ReactRouterSetup = () => {
//   return <Router>react router</Router>
// }


function App() {
  return (
     <Router>
       <NavBar/>
       <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/about">
        <About/>
        </Route>
        <Route path="/offsets">
        <Offsets/>
        </Route>
        </Switch>
      </Router>
  );
}

//export default ReactRouterSetup;
export default App;

