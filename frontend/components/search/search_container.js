import { connect } from 'react-redux';
import { searchCategories } from '../../actions/search_action';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    results: state.entities.query.categories
  };
};

const mapDispatchToProps = (query) => (dispatch) => {
  return {
    searchCategories: (query) => dispatch(searchCategories(query)),
    addDeck: (deckId) => dispatch(addDeck(deckId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
