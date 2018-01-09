import { connect } from 'react-redux';
import { addCard } from '../../actions/deck_actions';
import AddCardForm from './add_card_form';

const mapStateToProps = (state) => {
  return {
    cards: state.entities.cards
  };
};


const mapDispatchToProps = (dispatch, { type }) => {
  return {
    addCard: (card) => dispatch(addCard(card))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddCardForm);
