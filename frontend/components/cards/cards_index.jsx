import React from 'react';
import AddCardContainer from './add_card_container';

// TODO: Take deck props from route params.

class CardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCardForm: false
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }


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
        <p className="card-list-item">{card ? card.front : "Add some cards!"}</p>
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
