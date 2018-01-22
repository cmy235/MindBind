import React from 'react';
import DeckShowContainer from './deck_show_container';
import { withRouter } from 'react-router-dom';
import CardsIndexContainer from '../cards/cards_index_container';
import { Route } from 'react-router-dom';


class DeckShow extends React.Component {
  constructor(props){
    super(props);
    this.fetchDeck = this.props.fetchDeck.bind(this);

    this.toggleDelete = this.toggleDelete.bind(this);

    this.state = {
      showDropdown: false
    };
  }

  componentDidMount() {
    const deckId = this.props.match.params.deckId;
    this.props.fetchDeck(deckId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.deckId !== nextProps.match.params.deckId){
      this.props.fetchDeck(nextProps.match.params.deckId);
    }
  }

  toggleDelete() {
    this.setState({showDropdown: !this.state.showDropdown});
  }

  render() {
    let deckName;
    let deckId;
    if (this.props.deck) {
      deckName = this.props.deck.title;
      deckId = this.props.deck.id;
    } else {
      deckName = "";
    }

    debugger

    return (
      <div className="cards-container">
        <section>
          <div className="deck-name">{deckName}
          </div>
          <div className="dropdown">
            <div className="settings-icon"
              onClick={() => this.toggleDelete()}>
              <i className="fa fa-cog settings-icon" aria-hidden="true"></i>
            </div>
            { this.state.showDropdown ?
              <button className="delete-button"
                onClick={ () => this.props.deleteDeck(deckId) }>
                <i class="fa fa-minus-circle" aria-hidden="true"></i>
                Delete</button>
              : ""
            }
          </div>
        </section>
        <CardsIndexContainer />
      </div>
    );
  }
}


export default withRouter(DeckShow);






//
// {if (this.props.state.deck[this.props.match.params.deckId].title)}
// {currentDeckName ? <h2> currentDeckName </h2> : ""}
