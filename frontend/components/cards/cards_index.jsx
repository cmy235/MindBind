import React from 'react';
import AddCardContainer from './add_card_container';
import { FlipCard } from 'react-flop-card';

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
        <div><p>{
          card ? card.front : "Add some cards"}</p>
          <button className="delete-card-button"
              onClick={card ? () => this.props.deleteCard(card.id) : ""}
              >Remove card</button>
              <FlipCard
            cardFlipped={ true } onClick={ this.toggleCard }
            width={ 50 } height={ 25 } />
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
