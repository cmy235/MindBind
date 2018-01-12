import React from 'react';
import AddCardContainer from './add_card_container';
import { FlipCard } from 'react-flop-card';
import CardFront from './card_front';
import CardBack from './card_back';


// TODO: Take deck props from route params.

class CardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCardForm: false,
      cardFlipped: false
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard (){
     this.setState({
       cardFlipped: true
     });
  }

{/*
  flipCard (back) {
   const flop = document.getElementById("card-text");
   flop.innerHTML= back;
}
*/}


  render() {
    const addCard = (this.state.showDeckForm ?
          <AddCardContainer
            showModal={this.state.showCardForm}
            closeCardForm={() => this.setState({showCardForm: false})}
            /> :
        null);

    const currentDeckId = this.props.match.params.deckId;
    const cards = this.props.deck.cardIds.map( (cardId) => {
    const card = this.props.cards[cardId];
      return (
        <div className="card-list-inner">
          <FlipCard
            width={"50%"}
            height={"25%"}
            onClick={ () => this.setState({cardFlipped: !this.state.cardFlipped })}
           frontChild={<CardFront question={card.front} />}
           backChild={<cardFront answer={card.back} />}
           flipped={this.state.cardFlipped}
         />
       
          <div className="card-text">
            <div class="front">
              {card ? card.front : "Add some cards"}
            </div>
            <div class="back">
              {card ? card.back : ""}
            </div>
          </div>


          <button className="flip-button"
              >Flip card!
          </button>
          <button className="delete-card-button"
            onClick={card ? () => this.props.deleteCard(card.id) : ""}
            >x</button>
            <div className="card-flip-container">
            </div>
        </div>
      );
    });

    return (
      <div className="card-list-outer">
        <div className="card-list-container">
          {cards}
        </div>
        <AddCardContainer />
       </div>
      );
  }

}

export default CardsIndex;
