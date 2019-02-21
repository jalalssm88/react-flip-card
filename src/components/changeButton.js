import React, { Component } from 'react';

class ChangeButton extends Component {
    constructor(props){
        super(props);
        
        this.changeCards = this.changeCards.bind(this)
    }
    changeCards(){
        this.props.renderCard();
    }
    render(){
        return(
            <div className="container">
                <button onClick={this.changeCards}>change card</button>
            </div>
        )
    }
}
export default ChangeButton;