import React, {Component} from 'react';
import {Link} from "react-router-dom"
class  Home extends Component {
    render() { 
        return ( 
        <div className="App">
          <h1>Home Page</h1>
          <Link to="/userlist">User List</Link>
          </div>
       );
    }
}
 
export default Home;