
import './App.css';
import Program from './Components/Program/Program';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Shows from './pages/Shows/Shows';


function App() {
  return (   
  <Router>
    <div className="App">
      <Navbar/>
     <Program/>
     <Switch>
     <Route exact path="/Shows"  component={Shows}>
         <Shows/>
       </Route></Switch>
     <Footer/>
   </div>
</Router>
  );
}

export default App;
