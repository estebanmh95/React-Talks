import React from 'react';
import './App.css';
import Home from './Views/Home'
import Talk from './Views/Talk'
import New from './Views/New'
import Header from './Components/Header'
import { Route, Switch } from "react-router-dom";

class App extends React.PureComponent{

  render(){
    return (
/*

        <Switch>
          <Route path = "/" component={Home} exact/>
          <Route path = "/about" component={About} exact/>
          <Route path = "/login" component={Login} exact/>
        </Switch>

      ESTO VA EN EL NAVBAR POR EJEMPLO
      const About = () =>{
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      }
      */
        <>
     <Header/>
     <Switch>
         <Route path = "/" component={Home} exact/>
         <Route path = "/talk/:talkId" component={Talk} exact/>
         <Route path = "/new" component={New} exact/>
       </Switch>
       </>

    )
  }
}

export default App;
