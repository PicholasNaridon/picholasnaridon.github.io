import React, { Component } from 'react';
import { base, app } from '../base'
import { Well, FormControl, FormGroup, Button, Row, Grid, Col }  from 'react-bootstrap'

class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
    }
    componentWillMount(){
        base.syncState(`game/messages`, {
            context: this,
            state: 'messages',
            asArray: true
        });
    }
    componentWillUnmount(){
        base.remove('game/messages', function(){
            console.log("removed")
          });
    }

    addMessage(e){
        e.preventDefault()
        var message = this.input.value 
        base.push('game/messages', {
            data: {message: message}
        });
        this.input.value = ''
    }
    
    render() {
        return (
            <Grid>
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <Well >
                            {this.state.messages.map(function(message){
                                return (<p key={message.key}>{message.message}</p>)
                            })}
                        </Well>
                    </Col>
                </Row>
                <Row>
                    <Col lgOffset={1} smOffset={1} mdOffset={1} lg={10} sm={10} md={10}>
                        <Well >
                            <FormGroup >
                                <FormControl type="text" placeholder="Enter Message" inputRef={ref => { this.input = ref; }}/>
                                <Button type="submit" bsStyle="primary" onClick={this.addMessage.bind(this)}>Submit</Button>
                            </FormGroup>
                        </Well>
                    </Col> 
                </Row>
            </Grid>
        );
    }
}

export default Chat;