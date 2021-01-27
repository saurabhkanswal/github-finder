import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './componenets/layout/Navbar';
import Home from './componenets/pages/Home'
import NotFound from './componenets/pages/NotFound'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css';

import Alert from './componenets/layout/Alert'
import About from './componenets/pages/About'
import User from './componenets/users/User'
const App =()=>{
 
  
 
  // async componentDidMount(){

  //   this.setState({loading:true})
  //   const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users:res.data, loading:false})
  // }
  
  
  
 

  



    // Destructring
    // const {users,loading}=this.state
    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Alert />
          <Switch>
            <Route exact path='/' component={Home}
            />

          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' component={User} />
          <Route component={NotFound} />
          </Switch>
          
        </div>
      </div>
    </Router>
    </AlertState>
    </GithubState>
    );
  }
 
export default App;
