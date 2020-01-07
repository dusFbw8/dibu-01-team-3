import React, { Component } from 'react';
import { Table, Button} from 'react-bootstrap';

class Userlist extends Component {
  
    render() { 
        const {userList, deleteHandler, editHandler, updateHandler} =this.props;
      
        return (
            <div className="container">
                <h2>User Records</h2>
<Table className="striped bordered hover">
  <thead>
    <tr>
      <th>UserName</th>
      <th>Email</th>
      <th>Group</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
   
  {userList.map((data)=>
            <tr key= {data.userId}>
                <td>{data.userId}</td>
                <td>{data.email}</td>
                <td>{data.group.toString()}</td>
                <td><Button className="btn btn-danger"
                            onClick={()=>deleteHandler(data)}>Delete</Button></td>
                <td><Button className="btn btn-warning"
                            onClick={()=>editHandler(data)}>Edit</Button></td>
                

                </tr>) }
   
  </tbody>
</Table>
                

            </div>
          );
    }
}
 
export default Userlist;
