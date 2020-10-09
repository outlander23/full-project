import React,{Component} from 'react';

class DataUser extends Component{
	
	
	render(){
	const {id,name, username, cf_handle, uri_id, user, total_solve,batch ,email}=this.props;
	return (
	
	 <tr>
     
     
      
      <td>{id}</td>
      <td>{username}</td>
      <td>{name}</td>
      <td>{email}</td>
      
      <td>{cf_handle}</td>
      <td>{batch}</td>
      <td>{total_solve}</td>
      <td>{user}</td>
      
      
    </tr>
	
	
	);
	}
}
export default DataUser;


	
