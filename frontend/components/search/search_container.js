import { connect } from 'react-redux';
import { searchCategories } from '../../actions/search_action';
import Search from './search';

const mapStateToProps = (state) => {
  debugger
  return {
    results: state.entities.query.results
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
