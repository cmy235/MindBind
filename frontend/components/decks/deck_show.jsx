import React from 'react';
import DeckShowContainer from './deck_show_container';
import { withRouter } from 'react-router-dom';
import CardsIndexContainer from '../cards/cards_index_container';
import { Route } from 'react-router-dom';


class DeckShow extends React.Component {
  constructor(props){
    super(props);

    this.fetchDeck = this.props.fetchDeck.bind(this);
  }

  componentDidMount() {
     const deckId = this.props.match.params.deckId;
     this.props.fetchDeck(deckId);
   }

   componentWillReceiveProps(nextProps) {
     if (this.props.match.params.deckId !== nextProps.match.params.deckId){
       this.props.fetchDeck(nextProps.match.params.deckId);
     }
   }

  render() {
    debugger
    return (
      <div className='cards-container'>Deck Show Page,
         current deck: {this.props.match.params.deckId}
         <CardsIndexContainer />
       </div>

      );
  }
}

export default withRouter(DeckShow);
