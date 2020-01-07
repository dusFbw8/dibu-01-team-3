import React, {Component} from 'react';
import Userlist from "./userlist"
class  Home extends Component {
    state = {  }
    render() { 
        const {userList,editHandler,deleteHandler,updateHandler} = this.props;
        return ( <div className="App">
        <Userlist userList={userList}
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}
                  updateHandler={updateHandler}
        />
      </div> );
    }
}
 
export default Home;