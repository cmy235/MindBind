import { connect } from 'react-redux';
import { addDeck } from '../../actions/deck_actions';
import AddDeckForm from './add_deck_form';

const mapStateToProps = (state) => {
  return {
    decks: state.entities.decks
  };
};


const mapDispatchToProps = (dispatch, { type }) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddDeckForm);
