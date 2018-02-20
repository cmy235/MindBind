import React from 'react';
import DeckIndexItem from './deck_index_item';
import AddDeckContainer from './add_deck_container';
import AddDeckForm from './add_deck_form';
import CardsIndexContainer from '../cards/cards_index_container';
import { Link, withRouter } from 'react-router-dom';

class DecksIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showDeckForm: false,
      showBackgroundImage: true
    };
    this.flipDeckModal = this.flipDeckModal.bind(this);
  }

  componentDidMount() {
    this.props.requestDecks();
    if (this.props && this.props.decks.length != 0) {
      this.props.history.push(`/decks/${this.props.decks[0].id}`);
    }
  }

  hideBackgroundImage() {
    this.setState({
      showBackgroundImage: false
    });
  }

  flipDeckModal() {
    this.setState({
      showDeckForm: !this.state.showDeckForm
    });
  }

  render (){
    const addDeck = (this.state.showDeckForm ?
      <AddDeckContainer
        showModal={this.state.showDeckForm}
        closeDeckModal={() => this.setState({showDeckForm: false})}
        /> :
        null);

        const showBackground = (this.props.location.pathname.length < 7 ?
          <div className="background-img-container">
            <br/>
            <img className="welcome-img" src={window.img.filler}>
            </img>
              <div className="img-text-1">Learn faster, the MindBind way. Click a deck to begin!  </div>
            <br/>
          </div>
          : "" );

          return(
            <div>
              {addDeck}
              <div className="deck-title-container">
                <div className="search-add-icons">
                  <span onClick={this.flipDeckModal}>
                    <i className="add-button fa fa-plus-square btn fa-2x" aria-hidden="true"></i>
                  </span>
                  <Link to={"/search"} className="in-line">
                    <i className="search-button fas fa-search btn fa-2x">
                    </i>
                  </Link>
                </div>
                <div className="add-deck-title">
                  Decks
                </div>
              </div>
              <div className="deck-outer">
                {
                  this.props.decks.map( (deck) => (
                    <div className="deck-container">
                      <div className="deck-list">
                        <Link to={`/decks/${deck.id}`} className="in-line">
                          <ul className="deck-list-item"
                            onClick={this.hideBackgroundImage}>
                            <img className="deck-img" src={window.img.deck}></img>
                            <div className="item-title">
                              <div className="sidebar-title">
                                {deck.title}
                              </div>
                              <div className="gray-bar"></div>
                            </div>
                          </ul>
                        </Link>
                      </div>
                    </div>
                  ))
                }
                <div className="welcome">
                </div>
              </div>
              <div className="cards-container">
                {showBackground}
              </div>
            </div>
          );
        }
      }

      export default DecksIndex;

      {/*
        const showBackground = (this.props.link.length > 7 ?
        <div>
        <img className="filler-img" src={window.img.filler}></img>
        <div className="img-text">Proven learning...</div>
        <div className="img-sub-text">Click on a deck to start...</div>
        </div>
        : "" );

        {showBackground}

        */}
