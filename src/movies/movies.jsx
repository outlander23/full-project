import React, { Component } from 'react';
import ListGroup from './common/listGroup';
import Pagination from "./common/pagination";

class Movies extends Component {
    
    state={
    itemsCount: 10,
    pageSize: 4,
    currentPage: 1,
    
    }
    
   handlePageChange= page =>{
   																														   				this.setState({currentPage:page});
   };
    
    

    render() { 

      const {pageSize, itemsCount, currentPage}=this.state;
        return ( 

          

                <div className="col">
				
                <Pagination 
                itemsCount={itemsCount}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
                />
                
            
                </div>
           

         );
    }
}
 
export default Movies;
