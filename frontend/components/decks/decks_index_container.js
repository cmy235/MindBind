import decksIndex from './decks_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { selectAllDecks, selectDeckCards, selectDeckSingleCard } from '../../reducers/selectors';
import { requestDeck, requestDecks } from '../../actions/deck_actions';


const mapStateToProps = (state, { deck }, ownProps) => {
  return {
    decks: selectAllDecks(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestDecks: () => dispatch(requestDecks()),
  addDeck: (deck) => dispatch(addDeck(deck))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(decksIndex));
