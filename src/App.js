import React, { Component } from 'react';
import './App.css';
import Home from './components/userlist';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {IndexRoute} from "react-router";
import EditList from './components/editlist'

class App extends Component {

  state = {
    status:'success',
    list:[
      {userId:'bilal',
      email:'123@123.com',
      group:['admin','teacher']
      },
      {userId:"ather",
       email:"testing@testing.com",
       group:["student", "lerner"] },

       {userId:"ahmad",
       email:"testing@testing.com",
       group:["student", "lerner"] },

       {userId:"ali",
       email:"testing@testing.com",
       group:["student", "lerner"] }],

    error:['userId is taken'],
    path:"/"}

editHandler=(target)=>{
  this.setState({path:"/editlist"})

}

deleteHandler = (target)=>{

  if(!window.confirm("Are u sure")) return
  let {list}= this.state;
  list=list.filter((list)=>list!==target)
  this.setState({list})
}
updateHandler = ()=>{

}
render(){
  return (
    <Router>
    
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
         <Route path="this.state.path">
          <EditList />
        </Route>
        {/*
        <Route path="/users">
          <Users />
        </Route> */}
        <IndexRoute>
          <Home userList={this.state.list}
                  editHandler={this.editHandler}
                  deleteHandler={this.deleteHandler}
                  updateHandler={this.updateHandler}/>
        </IndexRoute>
      </Switch>
  </Router>
    
  );
}
  }
export default App;
