import { connect } from 'react-redux';
import { addDeck } from '../../actions/deck_actions';
import AddDeckForm from './add_deck_form';

const mapStateToProps = (state, {user}) => {
  return {
    deck_ids: user.deck_ids
  };
};


const mapDispatchToProps = (dispatch, { type }) => {
  return {
    addDeck: () => dispatch(addDeck())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddDeckForm);
