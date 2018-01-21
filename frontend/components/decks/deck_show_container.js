import React from 'react';
import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { deleteDeck } from '../../actions/deck_actions';


const mapStateToProps = (state, ownProps) => {
debugger
  return {
    deck: state.entities.deck[ownProps.match.params.deckId],
    deckName: state.entities.title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeck: (deckId) => dispatch(requestDeck(deckId)),
    deleteDeck: (deckId) => dispatch(deleteDeck(deckId))
  };
};

// mapState
//    Grab deck id from props

// mapDispatchToProps
//    fetchDeck

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);
