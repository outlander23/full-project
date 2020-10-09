import React,{Component} from 'react';
import Navlist from "./navlist";
import {NavLink,Link} from "react-router-dom";

const facebook="https://web.facebook.com/smmiloy.rahman.161/";
const fivver="https://www.fiverr.com/miloy23?up_rollout=true";

class Sidebar extends Component{
	
	
	render(){
	
	
	
	return (
	<React.Fragment>
	
  
 
  
			<nav id="sidebar" >
				<div className="custom-menu">
					<button type="button" id="sidebarCollapse" className="btn btn-primary">
	          		<i className="fa fa-bars"></i>
	          		<span className="sr-only"></span>
	       			 </button>
     			</div>
     			
     			<div className="p-4">
		  		<h1><a href="index.html" className="logo">WelCome <span>B12 is a web site thet held contest weekly</span></a></h1>
	        	<ul className="list-unstyled components mb-5">
	          <li className="active">
	            <a href="#"><span className="fa fa-home mr-3"></span>Brur</a>
	          </li>
	         
	          <li>
              <Link to="/counters"><span className="fa fa-briefcase mr-3"></span>Projects</Link>
	          </li>
	         
	          <li>
              <a href="#"><span className="fa fa-suitcase mr-3"></span>Gallery</a>
	          </li>
	          <li>
              <a href="#"><span className="fa fa-cogs mr-3"></span> About Us</a>
	          </li>
	          <li>
              <a href="#"><span className="fa fa-paper-plane mr-3"></span>Contacts</a>
	          </li>
	        </ul>
	        </div>
	        <div className="footer ml-3">
	        	<p>Copyright &copy; by S.M.Miloy </p>
	        </div>
	        
    	</nav>

    	</React.Fragment>
	
	);
	}
	
}
export default Sidebar;
