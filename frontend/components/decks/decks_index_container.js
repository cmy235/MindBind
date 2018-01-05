import decksIndex from './decks_index';
import { connect } from 'react-redux';

import { selectAllDecks, selectDeckCards, selectDeckSingleCard } from '../../reducers/selectors';
import { requestDeck, requestDecks } from '../../actions/deck_actions';


const mapStateToProps = (state, { deck }) => ({
  decks: selectAllDecks(state)
  // cards: selectDeckCards(state, state.entities.decks)
  // card: selectDeckSingleCard(state, deck.cards)
});

const mapDispatchToProps = (dispatch) => ({
  requestDecks: () => dispatch(requestDecks())
});

export default connect(mapStateToProps, mapDispatchToProps)(decksIndex);
