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
    debugger
    const addCard = (this.state.showDeckForm ?
          <AddCardContainer
            showModal={this.state.showCardForm}
            closeCardForm={() => this.setState({showCardForm: false})}
            /> :
        null);

    return (
      <div>
        {addCard}
        <div className="deck-name">Deck name here
        </div>

       </div>
      );
  }
}

export default CardsIndex;
