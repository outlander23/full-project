import React from 'react';

const ListGroup = (props) => {

    const {items,textProperty,valueProperty}=props;
    
    return ( 
    <ul className="list-group">
    	{DataTransferItemList.map(item=>(
        	<li 
        	key={item._id} 
        	className="list-group-item">	
        	</li>))}

    </ul>

     );
}

 
export default ListGroup;
