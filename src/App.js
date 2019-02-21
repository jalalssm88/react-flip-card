import React, { Component } from 'react';
import './App.css';
import Cards from './components/cards';
import ChangeButton from './components/changeButton'
import {DB_CONFIG} from './config/firebase/config_db'
import firebase from 'firebase/app'
import 'firebase/database'

class App extends Component {
  constructor(props){
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database  = this.app.database().ref().child('cards');
    this.updatesCard = this.updatesCard.bind(this)


    this.state = {
      cards:[],
      currentCard:[]
    }

    
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.database.on('child_added', snap => {
      currentCards.push({
        id:snap.key,
        eng:snap.val().eng,
        urdu:snap.val().urdu,
      })

      console.log('value from database', snap.key)

      this.setState({
        cards:currentCards,
        currentCard : this.getRandomCard(currentCards) 
      })
    })
    
  }
  
  updatesCard(){
    var mycard = this.state.cards
    this.setState({
      currentCard:this.getRandomCard(mycard)
    })
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length )]
    return card;
  }
 
  render() {
    return (
      <div className="App">
        <Cards eng={this.state.currentCard.eng} urdu={this.state.currentCard.urdu}/>
        <ChangeButton renderCard={this.updatesCard}/>
      </div>
    );
  }
}

export default App;
