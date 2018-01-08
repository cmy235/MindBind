import React from 'react';
import { connect } from 'react-redux';
import cardsIndex from './cards_index';
import { addCard, editCard, deleteCard } from '../../actions/card_actions';


const mapStateToProps = ({card, deck}) => ({
  card: card,
  deck: deck
});

const mapDispatchToProps = (dispatch) => ({
  addCard: (card) => dispatch(addCard(card)),
  deleteCard: () => dispatch(deleteCard())
});

export default connect(mapStateToProps, mapDispatchToProps)(cardsIndex);
