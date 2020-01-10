import React, { Component, createRef } from 'react';
import './App.css';
import Home from './components/home';
import Userlist from './components/userlist';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import EditList from './components/editlist'

class App extends Component {

  state = {
    status:'success',
    list:[
      {userId:'bilal',
      email:'123@123.com',
      group:[ "Trainer" ,"Managment", "Visitor"]
      },
      {userId:"ather",
       email:"testing@testing.com",
       group:["Student", "Trainer" ,"Managment"] },

       {userId:"ahmad",
       email:"testing@testing.com",
       group:["Student", "Trainer" ,"Visitor"] },

       {userId:"ali",
       email:"testing@testing.com",
       group:["Student" ,"Managment", "Visitor"]}
      ],

    error:['userId is taken'],
    userGroups:["Student", "Trainer" ,"Managment", "Visitor"]
  }

editHandler=(data)=>{
  console.log("data from edithandler",data)
}

deleteHandler = (target)=>{

  if(!window.confirm("Are u sure")) return
  let {list}= this.state;
  list=list.filter((list)=>list!==target)
  this.setState({list})
}
updateHandler = (event)=>{

  event.preventDefault();
  console.log(event.email)
 

}
changeHandler=(target)=>{
  console.log("change handler called", target)
}
render(){
  return (
    <Router>
           <Switch>
            <Route path="/" exact>
              <Home/>
             </Route>

            <Route path="/userlist" component= {()=>
              <Userlist 
                  userList={this.state.list}
                  editHandler={this.editHandler}
                  deleteHandler={this.deleteHandler}
                  updateHandler={this.updateHandler}/>} />
                

            <Route path="/editlist/:id" render={(props)=>
              <EditList
                {...props}
                updateHandler={this.updateHandler}
                changeHandler={this.changeHandler}
                userGroups={this.state.userGroups}/>} />
              
          </Switch>     
  </Router>
    
  );
}
  }
export default App;
