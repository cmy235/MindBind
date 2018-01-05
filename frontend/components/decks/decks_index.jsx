
import React from 'react';
import DeckIndexItem from './deck_index_item';

class DecksIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestDecks();
  }

  render (){

    return(
      <div>
          {
          this.props.decks.map( (deck) => (
            <div className="deck-container">
              <div className="deck-list">
                <ul className="deck-list-item">{deck.title}</ul>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default DecksIndex;
