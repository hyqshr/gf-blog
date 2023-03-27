import React from "react";
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import MainScreen from './screens/MainScreen'
import Header from "./Header";

function App() {
  return (
    <div>     
        <div   
          style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
            }}>
        </div>
        
        <Router>
          <Header />
          <Switch>
            <Route  path="/" component = {MainScreen} />
          </Switch>
        </Router> 
    </div>
  );
}

export default App;
