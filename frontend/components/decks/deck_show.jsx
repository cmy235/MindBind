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
    let deckName;
    let deckId;
    if (this.props.deck) {
      deckName = this.props.deck.title;
      deckId = this.props.deck.id;
    } else {
      deckName = "";
    }

    debugger

    return (
      <div className='cards-container'>
        <div className="deck-name">{deckName}
        </div>
        <button onClick={ () => this.props.deleteDeck(deckId) }>DELETE</button>
         <CardsIndexContainer />
       </div>
      );
  }
}


export default withRouter(DeckShow);






//
// {if (this.props.state.deck[this.props.match.params.deckId].title)}
// {currentDeckName ? <h2> currentDeckName </h2> : ""}
