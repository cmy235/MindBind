import React from 'react';
import AddCardContainer from './add_card_container';

class CardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCardForm: false
    };
  }

  render() {
    const addDeck = (this.state.showDeckForm ?
          <AddCardContainer
            showModal={this.state.showCardForm}
            closeCardForm={() => this.setState({showCardForm: false})}
            /> :
        null);

    return (
      <div>
        <div className="deck-name">Deck name here
        </div>
        {
          this.props.cards.map( (card) => (
        <ul className="card-list">
          <li className="card-list-item">
            {card.front}
          </li>
        </ul>
          ))
        }
       </div>
      );
  }
}

export default CardsIndex;
