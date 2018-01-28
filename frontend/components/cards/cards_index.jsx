import React from 'react';
import AddCardContainer from './add_card_container';
import { FlipCard } from 'react-flop-card';
import CardFront from './card_front';
import CardBack from './card_back';
import CardDelete from './card_delete';
import { Link } from 'react-router-dom';

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
              <ul className="list-container">
                <li className="card-preview-text">
                  {card ? card.front : ""}
                </li>

                <li className="study-set">
                  { card ? <Link to={
                    {    pathname: `/cards/${card.id}`,
                    state: {
                      deck: this.props.deck,
                      currentDeckId: currentDeckId
                    }
                  }
                }
                className="study-button">
                <i class="fa fa-play-circle-o play" aria-hidden="true"></i>
                Study
              </Link> : "" }
              <CardDelete
                deleteCard={this.props.deleteCard}
                card = {card}/>
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div className="card-list-outer">
        <div className="cards">
          Cards
        </div>
        <div className="card-list-container">
          {cards}
        </div>
        <AddCardContainer />
      </div>
    );
  }
}

export default CardsIndex;

{/*  when you update the settings button:

  // should have dekc info, etc.

  { this.state.showDeleteButton ?
  <button className="delete-card-button"
  onClick={card ? () => this.props.deleteCard(card.id) : ""}
  >x</button>
  : ""
  }


  */}
