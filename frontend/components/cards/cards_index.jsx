import React from 'react';
import AddCardContainer from './add_card_container';
import { FlipCard } from 'react-flop-card';
import CardFront from './card_front';
import CardBack from './card_back';
import { Link } from 'react-router-dom';



// TODO: Take deck props from route params.

class CardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCardForm: false,
      cardsArray: []
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard (){
     this.setState({
       cardsArray: true
     });
  }



  render() {

    const addCard = (this.state.showDeckForm ?
          <AddCardContainer
            showModal={this.state.showCardForm}
            closeCardForm={() => this.setState({showCardForm: false})}
            /> :
        null);

    const currentDeckId = this.props.match.params.deckId;
    const cards = this.props.deck.cardIds.map( (cardId, idx) => {
    const card = this.props.cards[cardId];


      return (
        <div className="card-list-inner">
          <Link to={`/cards/${card.id}`} className="in-line">Study!</Link>
          <div className="card-text">
              <div class="card-front">
                { card ? <CardFront front={card.front}/> : "" }
              </div>
              <div class="card-back">
                { card ? <CardBack back={card.back}/> : "" }
              </div>
          </div>

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
