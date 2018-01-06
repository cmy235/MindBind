
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
        <div className="deck-title-container">
          <div className="search-add-icons">

          <i class="add-button fa fa-plus-square btn fa-2x" aria-hidden="true"></i>

          <i class="search-button fas fa-search btn fa-2x"></i>
          </div>
          <div className="deck-title">
          Decks
        </div>
        </div>
          {
          this.props.decks.map( (deck) => (
            <div className="deck-container">
              <div className="deck-list">
                <ul
                  className="deck-list-item">
                  <div className="item-title">
                  <img className="deck-img" src={window.img.deck}></img>
                    <div className="in-line">{deck.title}</div>
                    <div className="gray-bar"></div>
                  </div>
                </ul>
              </div>
            </div>
          ))
        }
        <div className="add-deck-form">
          <p class="add-deck-title">New Deck</p>
          <div className="form-buttons">
            <button class="" type="button">Cancel</button>
            <button class="save-button" type="button">Save</button>
          </div>
        </div>

        <div className="cards-container">
          <h2> insert CardIndexContainer here! </h2>

        </div>
      </div>
    );
  }
}

export default DecksIndex;
