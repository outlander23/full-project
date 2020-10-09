import React,{Component} from 'react';
import axios from "axios";
import DataUser from "./datauser";
import http from "../http/httpService";

const endPoint="http://mah2020.herokuapp.com/api/users?limit=500&offset=0"

class Profile extends Component{
	state={

	
	users: [
		]
	};
	
	async componentDidMount(){
		 try{
		 const data = await http.get(endPoint);
		 const users= data['data']['results'];
		 this.setState({users});
		 console.log(users);
		 }
		 catch (ex){
		   alert("servar error");
		 
		 }
		
	
	};
	
	
	
	
	
	
	
	
	render(){
	
	
	
	return (
	
	
    <div>
    <table className="table table-bordered table-hover">
     <thead>
	 <tr>
      
      <th scope="col">username</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">cf_handle</th>
      <th scope="col">uri_id</th>
      
    </tr>
     </thead>
     <tbody>
     
     {this.state.users.map(datauser => 
     
	<DataUser
	
	
	username={datauser.username}
	id={datauser.id}
	name={datauser.name}
	email={datauser.email}
	cf_handle={datauser.cf_handle}
	uri_id={datauser.uri_id}
	
	/>)}
    </tbody>
    </table>
	
	</div>);
	
	};
}
export default Profile;
