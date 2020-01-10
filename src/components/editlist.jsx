import React, {Component} from 'react';
import { Form , Button} from 'react-bootstrap';

class EditList extends Component {

    render() { 
        console.log(this.props)
        const target = this.props.location.state.name
        const userGroups = this.props.userGroups

        return ( <div>
            <h1>Editing {this.props.match.params.id}</h1>
            <Form onSubmit={this.props.updateHandler} method="post" >
            <Form.Group controlId="formBasicName">
            <Form.Label>UserId</Form.Label>
            <Form.Control type="text" name="userId" placeholder={target.userId} onChange={this.props.changeHandler} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder={target.email}  onChange={this.props.changeHandler}/>
            </Form.Group>
            {userGroups.map((value, index)=>
                        <Form.Check 
                            onChange={this.props.changeHandler}
                            key={index}
                            type="checkbox"
                            label={value}
                            defaultChecked={target.group.includes(value)}    />)}
            
        <Button type="submit">
          Update
        </Button>
</         Form>
            
        </div> );
    } 
}
 
export default EditList;