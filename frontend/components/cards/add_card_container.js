import { connect } from 'react-redux';
import { addCard } from '../../actions/card_actions';
import AddCardForm from './add_card_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.entities.cards,
    deckId: ownProps.match.params.deckId
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => dispatch(addCard(card))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCardForm));
