import React, { Component } from 'react';
import { Button, ButtonToolbar, FormControl, Grid, Row, Col} from 'react-bootstrap'
import Gif from './Gif'
import "./assets/styles/style.css"

class Giphy extends Component {
    constructor(props){
        super(props)
        this.state = {
            words: ["Pennsylvania", "Texas", "New York", "Connecticut", "California", "Maryland", "North Carolina"],
            gifs: [],
            newWord: ''
        }
        this.selectWord = this.selectWord.bind(this)
        this.addWord = this.addWord.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    selectWord(word){
        fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=m1tz9av1s1dwBd9aQJ60i27gyf7qQqJS&limit=10`)
            .then(response => 
                response.json()) 
            .then( (json) => {
                var currentGifs = json.data
                this.setState(prevState => ({
                    gifs: currentGifs
                }))
            })           
    }   
    
    addWord(e){
        this.setState({
          newWord: e.target.value
        })
      }

    handleSubmit(e){
        e.preventDefault();
        this.setState(prevState => ({
            words: [...prevState.words, this.state.newWord],
            newWord: ''
        }))
    }
    
    render() {
        return (
            <div className="board-body">
                <ButtonToolbar>
                    {this.state.words.map((word) =>
                        <Button 
                            bsStyle="info"
                            key={word}
                            word={word}
                            onClick={this.selectWord.bind(this, word)}
                        >
                            {word}
                        </Button>
                    )}
                </ButtonToolbar>
                <Grid style={{marginTop: "5%"}}>
                    <Row className="show-grid">
                            <Col md={9} mdPull={5}>
                                <Grid>
                                {this.state.gifs.map((gif) =>
                                    <Col md={6}>
                                        <Gif 
                                            key={gif.id}
                                            rating={gif.rating}
                                            moving={gif.images.original.url}
                                            still={gif.images.original_still.url} 
                                        /> 
                                    </Col>
                                )}
                            </Grid>
                        </Col>
                        <Col md={3}>
                            <form>
                                <FormControl
                                    id="formControlsText"
                                    value={this.state.newWord}
                                    onChange={this.addWord}
                                    placeholder="new topic"
                                />
                                <Button type="submit" bsStyle="primary" bsSize="large"  value="Submit" onClick={this.handleSubmit}>Submit </Button>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Giphy;