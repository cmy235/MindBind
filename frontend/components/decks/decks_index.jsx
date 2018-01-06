import React from 'react';
import DeckIndexItem from './deck_index_item';
import AddDeckContainer from './add_deck_container';
import AddDeckForm from './add_deck_form';

class DecksIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showDeckForm: false
    };

    this.addDeckModal = this.addDeckModal.bind(this);

  }

  componentDidMount() {
    this.props.requestDecks();
  }

  addDeckModal() {
    this.setState({
      showDeckForm: true
    });
  }



  render (){
    return(
      <div>
        <div className="deck-title-container">
          <div className="search-add-icons">
            <span onClick={this.addDeckModal}>
              {this.state.showDeckForm ?
                <AddDeckContainer type=""/> :
                null
              }
              <i class="add-button fa fa-plus-square btn fa-2x" aria-hidden="true"></i>
            </span>

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

        <div className="cards-container">
          <h2> insert CardIndexContainer here! </h2>
        </div>
      </div>
    );
  }
}

export default DecksIndex;
