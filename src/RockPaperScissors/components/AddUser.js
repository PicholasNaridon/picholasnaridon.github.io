import React, { Component } from 'react';
import { base, app } from '../base'
import { FormGroup, FormControl, Button} from 'react-bootstrap'


class AddUser extends Component {
    constructor(props){
        super(props)
            this.state = {
                currentID: null
        }
        this.addUser = this.addUser.bind(this)
    }
    componentDidMount(){
        app.auth().signInAnonymously()
        app.auth().onAuthStateChanged(user => {
          user
            ? this.setState(() => ({currentId: user.uid }))
            : this.setState(() => ({ currentId: null }));
        }).bind(this)
    }

    addUser(e){
        e.preventDefault()
        var name = this.input.value
        this.props.addUserHandler(name, this.state.currentId)   
        this.input.value = ''; 
    }
    render() {
        return (
            <div>
                <div className="enter-name">
                    <h1>Welcome, please enter your name</h1>
                    <div>
                        Enter Name:
                        <FormGroup >
                            <FormControl type="text" inputRef={ref => { this.input = ref; }}/>
                            <Button type="submit" bsStyle="primary" onClick={this.addUser.bind(this)}>Submit</Button>
                        </FormGroup>
                    </div> 
                </div>
            </div>
        );
    }
}

export default AddUser;