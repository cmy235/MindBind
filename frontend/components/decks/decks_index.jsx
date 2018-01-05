
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
    debugger
    return(
      <div>
        <ul>
          {
          this.props.decks.map( (deck) => (
            <DeckIndexItem
              key={deck.id}
              deck={deck}
            />
          ))
        }
        </ul>
      </div>
    );
  }
}

export default DecksIndex;
