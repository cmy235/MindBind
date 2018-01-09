import React from 'react';
import AddCardContainer from './add_card_container';

// TODO: Take deck props from route params.

class CardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCardForm: false
    };
  }



  render() {

    const addCard = (this.state.showDeckForm ?
          <AddCardContainer
            showModal={this.state.showCardForm}
            closeCardForm={() => this.setState({showCardForm: false})}
            /> :
        null);

    const currentDeckId = this.props.match.params.deckId;
    const front = "front";

    return (
      <div>
        {addCard}
        <div className="deck-name">{currentDeckId}
        </div>

       </div>
      );
  }
}

export default CardsIndex;
