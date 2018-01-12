import React from 'react';
import SearchContainer from './search_container';
import SearchResultsContainer from './search_results_container';
import SearchResults from './search_results';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
    this.props.searchCategories({query});
  }

  render(){
    debugger

    let categoriesArray = [];
      if (this.props.results) {
        const searchResults = this.props.results;
        const categoriesList = searchResults.map( (categoryObject) => {
          categoriesArray.push(categoryObject);

          }
        );
      }

    return(
      <div className="full-page">
      <div className="search-container">
        <form onSubmit={this.handleSubmit}
          className="search-form">
            <input type="text"
              placeholder="e.g., math"
              value={this.state.query}
              onChange={this.update('query')}
              className="input-query"
            />
          <button className="search-cat-button"> Search </button>
        </form>
      </div>
      <div className="results-container">
        <SearchResults categoriesArray={categoriesArray} />
      </div>
    </div>
    );
  }
}

export default Search;
