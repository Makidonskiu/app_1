import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import 'antd/dist/antd.css'
import Form from './Form';
import Register from './Register';


function App() {
  return(
  <div>
    <Router>
      <Header/>
        <div style={{'width': '1080px'}}>
          <Switch>
            <Route exact path = '/form' component = {Form}/>
            <Route path = '/register' component = {Register}/>
          </Switch>
        </div>
    </Router>
  </div>
   
    
  )
}

export default App;
