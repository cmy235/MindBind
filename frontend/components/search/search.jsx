import React from 'react';
import SearchContainer from './search';

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
    let displayCategoryName = "";
    let displayDecks = "Search for some categories/decks!";
      if (this.props.results) {
        const myProps = this.props.results;
        const categoriesList = myProps.map( (category) => {
        displayCategoryName = category.name;
        let decksArray = category.decks.map( (deck) => {
          displayDecks=deck.title;
        });
      });
      }

    return(
      <div>
        <form onSubmit={this.handleSubmit}
          className="search-form">
            <input type="text"
              placeholder="e.g., math"
              value={this.state.query}
              onChange={this.update('query')}
              className="input-query"
            />
          <button  className="modal-signup-button"> Search </button>
        </form>

        <div className="results-list">
          <ul>

            {displayCategoryName}


            {displayDecks}

          </ul>
        </div>
      </div>
    );
  }
}

export default Search;

{/*
{ let resultsProps;
  if (this.props) {
    resultsProps = this.props;
    resultsArray = resultsProps.results.map( (category) => {
    return category.name;
});
}
}
*/}
