import React from 'react';
import SearchResultsContainer from './search_results_container';
import SearchContainer from './search_container';
import ResultsIndex from './results_index';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const categories = this.props.categoriesArray.map( (category) => {
      return(
        <div className="results-list-outer">
          <div className="category-title">
            {category.name}
          </div>
          <div className="results-list-outer">
            <ResultsIndex decks={category.decks}/>
          </div>
        </div>
        );
    });


    return(
        <div className="query-container">{categories}</div>
    );
  }
}

export default SearchResults;
