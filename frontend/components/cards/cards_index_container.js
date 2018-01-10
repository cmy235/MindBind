import React from 'react';
import { connect } from 'react-redux';
import cardsIndex from './cards_index';
import { addCard, editCard, deleteCard } from '../../actions/card_actions';
import { requestDeck } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.entities.cards,
    deck: (state.entities.deck[ownProps.match.params.deckId]) || { cardIds: [] }
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetchDeck: (deckId) => dispatch(requestDeck(deckId)),
  addCard: (card) => dispatch(addCard(card)),
  deleteCard: (cardId) => dispatch(deleteCard(cardId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(cardsIndex));
