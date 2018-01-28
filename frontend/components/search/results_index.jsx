import React from 'react';
import SearchResults from './search_results';


class ResultsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const decks = this.props.decks.map( (deck) => {

      return(
        <ul>{ deck ? deck.title : ""}</ul>
      );
    });

    return(
      <div className="deck-info">
        <ul>
          {decks}
        </ul>
      </div>
    );
  }

}

export default ResultsIndex;
