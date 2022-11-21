//import AcUnitIcon from '@mui/icons-material/AcUnit';
import Header from "./Header" 
import './App.css';
import '../src/Login.js';
import Login from "./Login"
import Body from "./Body"
import {BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom';
  
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
        <Login  />
      </Route>
      <Route path="/">
       <Header/>
        <Body/>
       </Route>
      
      </Switch> 
    </div>
    </Router>
  );
}

export default App;
