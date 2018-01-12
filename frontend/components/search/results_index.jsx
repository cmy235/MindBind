import React from 'react';
import SearchResults from './search_results';


class ResultsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const decks = this.props.decks.map( (deck) => {
      debugger
        return(
          <div>{ deck ? deck.title : "Category has no deck!"}</div>
        );
      });

    return(
      <div className="deck-info">
        {decks}
      </div>
    );
  }

}

export default ResultsIndex;
