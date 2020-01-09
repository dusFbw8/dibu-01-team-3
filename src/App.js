import React, { Component } from 'react';
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
      group:[{Student:false}, {Trainer:true}, {Managment:true}, {Visitor:true}]
      },
      {userId:"ather",
       email:"testing@testing.com",
       group:[{Student:true}, {Trainer:false}, {Managment:false}, {Visitor:false}] },

       {userId:"ahmad",
       email:"testing@testing.com",
       group:[{Student:false}, {Trainer:false}, {Managment:false}, {Visitor:true}] },

       {userId:"ali",
       email:"testing@testing.com",
       group:[{Student:true}, {Trainer:true}, {Managment:false}, {Visitor:true}] }],

    error:['userId is taken']
  }


editHandler=(target)=>{


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
           <Switch>
            <Route path="/" exact>
              <Home/>
             </Route>

            <Route path="/userlist" component= {()=><Userlist 
                userList={this.state.list}
                  editHandler={this.editHandler}
                  deleteHandler={this.deleteHandler}
                  updateHandler={this.updateHandler}/>} />
                

            <Route path="/editlist/:id" component={EditList} />
              

          </Switch>     
  </Router>
    
  );
}
  }
export default App;
