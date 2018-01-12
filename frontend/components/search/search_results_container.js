import { connect } from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = (state) => {
  
  return {
    results: state.entities.query.categories
  };
};

const mapDispatchToProps = (query) => (dispatch) => {
  return {
    searchCategories: (query) => dispatch(searchCategories(query))
  };
};

export default connect(mapStateToProps,
   mapDispatchToProps)(SearchResults);
