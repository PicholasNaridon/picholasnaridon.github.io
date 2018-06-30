import React, { Component } from 'react';
import { base, app } from '../base'
import { FormGroup, FormControl, Button, Row, Grid, Col, Well} from 'react-bootstrap'


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
            <Grid>
                <Row>
                    <Col lgOffset={1} smOffset={1} mdOffset={1} lg={10} sm={10} md={10}>
                        <Well >
                            <FormGroup >
                                <FormControl type="text" placeholder="Enter Name" inputRef={ref => { this.input = ref; }}/>
                                <Button type="submit" bsStyle="primary" onClick={this.addUser.bind(this)}>Submit</Button>
                            </FormGroup>
                        </Well>
                    </Col> 
                </Row>
            </Grid>
        );
    }
}

export default AddUser;