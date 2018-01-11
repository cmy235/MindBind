import { connect } from 'react-redux';
import { searchCategories } from '../../actions/search_action';
import Search from './search';

const mapStateToProps = (state) => {
  debugger
  return {
    // gives an array of 8 below!
    results: state.entities.query.categories
  };
};

const mapDispatchToProps = (query) => (dispatch) => {
  return {
    searchCategories: (query) => dispatch(searchCategories(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
