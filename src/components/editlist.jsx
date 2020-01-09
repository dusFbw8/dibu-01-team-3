import React, {Component} from 'react';
import { Form , Col, Button} from 'react-bootstrap';

class EditList extends Component {

 
    render() { 
        const target = this.props.location.state.name
        console.log(target)

        return ( <div>
            <h1>Editing {this.props.match.params.id}</h1>
            <Form>
            <Form.Group controlId="formBasicName">
            <Form.Label>UserId</Form.Label>
            <Form.Control type="text" placeholder={target.userId} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder={target.email} />
            </Form.Group>
            {target.group.map((group)=><Form.Check 
                                        type="checkbox"
                                        label={Object.keys(group).toString()}
                                        /*{(group)[(Object.keys(group).toString())]? "checked" : null}*/    />)}
            
        <Button variant="primary" type="submit">
          Update
        </Button>
</         Form>
            
        </div> );
    } 
}
 
export default EditList;