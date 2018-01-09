import React from 'react';
import DeckIndexItem from './deck_index_item';
import AddDeckContainer from './add_deck_container';
import AddDeckForm from './add_deck_form';
import CardsIndexContainer from '../cards/cards_index_container';
import { Link } from 'react-router-dom';

class DecksIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showDeckForm: false,
      // showDeckIndex: false
    };

    this.showDeckModal = this.showDeckModal.bind(this);
  }

  componentDidMount() {
    this.props.requestDecks();
  }

  showDeckModal() {
    this.setState({
      showDeckForm: true
    });
  }

  render (){
    const addDeck = (this.state.showDeckForm ?
      <AddDeckContainer
        showModal={this.state.showDeckForm}
        closeDeckModal={() => this.setState({showDeckForm: false})}
        /> :
        null);

    debugger
    return(
      <div>
        {addDeck}
        <div className="deck-title-container">
          <div className="search-add-icons">
            <span onClick={this.showDeckModal}>
              <i class="add-button fa fa-plus-square btn fa-2x" aria-hidden="true"></i>
            </span>
          <i class="search-button fas fa-search btn fa-2x"></i>
          </div>
          <div className="deck-title">
          Decks
        </div>
        </div>
        <div className="deck-outer">
          {
          this.props.decks.map( (deck) => (
            <div className="deck-container">
              <div className="deck-list">
                <ul
                  className="deck-list-item"
                  >
                  <div className="item-title">
                  <img className="deck-img" src={window.img.deck}></img>
                    <Link to={`/decks/${deck.id}`} className="in-line">{deck.title}</Link>
                    <div className="gray-bar"></div>
                  </div>
                </ul>
              </div>
            </div>
          ))
        }
      </div>

      </div>
    );
  }
}

export default DecksIndex;

// <div className="cards-container">
//   {showCards}
// </div>
