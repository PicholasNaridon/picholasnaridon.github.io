import React, { Component } from 'react';


class Score extends Component {

    handleScoreChange() {
        this.props.changeScore()
    }

    render() {
        if (this.props.output.includes("_")){
            return (
                <div className="score">
                    <h1>Score:</h1>
                    <h4 className="wins">{this.props.wins} Wins</h4>  
                    <h4 className="losses">{this.props.losses} Losses</h4>  
                </div>
            )
        }else {
            this.handleScoreChange()
            return (
                <div>
                    <h1>Score: {this.props.wins}</h1>
                    <div>You win!</div>
                </div>
            )
        }
    }
}

export default Score;
