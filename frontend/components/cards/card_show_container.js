import { connect } from 'react-redux';
import CardShow from './card_show';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    cards: state.entities.cards,
    currentCard: (state.entities.cards[ownProps.match.params.cardId]),
    deck: (ownProps.location.state ? ownProps.location.state.deck : "")
  };
};

const mapDispatchToProps = () => {
  return {
    deleteCard: (cardId) => dispatch(deleteCard(cardId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardShow));
