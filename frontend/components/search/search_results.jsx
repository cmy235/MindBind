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

          <div className="results-list-outer">
            <ResultsIndex
              addDeck={(deck) => this.props.addDeck(deck)}
              decks={category.decks}
              category={category.name}
              author={category.author_id}/>
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
