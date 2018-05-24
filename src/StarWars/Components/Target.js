import React, { Component } from 'react';


class Target extends Component {
    
    render() {
        if ((this.props.targetSelected) && (this.props.target.HP >=0)){
            return (
                <div>
                    <h1>Target</h1>
                    <div>
                        <img src={require(`../assets/images/${this.props.target.imageName}.png`)}/>
                        <div>HP: {this.props.target.HP}</div>
                    </div>
                </div>
            );
        }else {
            return (
                <div></div>
            )
        }
       
    }
}

export default Target;