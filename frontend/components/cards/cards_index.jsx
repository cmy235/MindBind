import React from 'react';
import AddCardContainer from './add_card_container';
import { FlipCard } from 'react-flop-card';
import CardFront from './card_front';
import CardBack from './card_back';


// TODO: Take deck props from route params.

class CardsIndex extends React.Component {
  constructor(props) {
    super(props);
debugger
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

  flipCard (back) {
    debugger
   const flop = document.getElementById("card-text");
   flop.innerHTML= back;
}

  debugger
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
          <div className="card-text">
          {card ? card.front : "Add some cards"}
          </div>
          <button className="flip-button"
              onClick={	() => this.flipCard(card.back) }
              >Flip card!
          </button>
          <button className="delete-card-button"
            onClick={card ? () => this.props.deleteCard(card.id) : ""}
            >X</button>
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
//
// <FlipCard
//   cardFlipped={ true } onClick={ this.toggleCard }
//   frontChild={<CardFront front={card.front} />}
//   backChild={<CardBack back={card.back} />}
//   width={ "50%" } height={ "25%" } />
//
//
