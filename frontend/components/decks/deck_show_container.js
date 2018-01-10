import React from 'react';
import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { requestDeck } from '../../actions/deck_actions';


const mapStateToProps = (state) => {
debugger
  return {
    state: state.entities,
    deckName: state.entities.title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeck: (deckId) => dispatch(requestDeck(deckId))
  };
};

// mapState
//    Grab deck id from props

// mapDispatchToProps
//    fetchDeck

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);
