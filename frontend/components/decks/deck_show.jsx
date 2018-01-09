import React from 'react';
import DeckShowContainer from './deck_show_container';
import { withRouter } from 'react-router-dom';


class DeckShow extends React.Component {
  constructor(props){
    super(props);

    this.fetchDeck = this.fetchDeck.bind(this);
  }



  render() {
    return (
      <h1 className='cards-container'>Deck Show Page,
         current deck: {this.props.deckId}</h1>
      );
  }
}

export default withRouter(DeckShow);
