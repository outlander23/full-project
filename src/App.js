import React, { Component} from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./login/loginForm";
import Users from "./test2/profile";
import Counters from "./test/counters";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import Contests from "./tutorial/contests";
import Codeforces from "./codeforces/codeforces";
import Register from "./login/registerFrom";
import Logout from "./logout";
import Notfound from "./notfound/notfound";
import Movies from "./movies/movies";

import './App.css';


class App extends Component {
	state={};
  	componentDidMount (){
  	try{
    	const jwty =localStorage.getItem("token");
    	const user =jwtDecode(jwty);
    	console.log(user);
    	this.setState({user});
    	}
    catch (ex){
    
    }
    };
    
  render() {
        return (
  

    <div>
   <Navbar user={this.state.user} />
    	<div>
    	
    	<Switch>
    	<Route path="/login" component={Login}/>
    	<Route path="/shoping" component={Counters}/>
    	<Route path="/users" component={Users}/>
    	<Route path="/register" component={Register}/>
    	<Route path="/notfound" component={Notfound}/>
    	<Route path="/counters"  component={Counters}/>
    	<Route path="/home" exact component={Home}/>
    	<Route path="/movies" exact component={Movies}/>
    	<Route path="/logout" exact component={Logout}/>
    	<Route path="/contests" exact component={Contests}/>
    	<Route path="/codeforces" exact component={Codeforces}/>
    	<Redirect to="/notfound"/>
    	</Switch>
    	

   	  </div>
    </div>
  )
  };
}

export default App;
