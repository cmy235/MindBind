import React from 'react';
import SearchResults from './search_results';
import { Link } from 'react-router-dom';

class ResultsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    debugger
    const decks = this.props.decks.map( (deck) => {
      return(
        <ul className="deck-blurb">
          <img className="deck-lrg" src={window.img.deck_lrg}></img>
            <div className="cat-title"> CATEGORY: {" "}
              {this.props.category}
            </div>
          { deck ?
            <Link to={`/decks/${deck.id}`}>{deck.title}
              <i onClick={ (deck) => this.props.addDeck(deck)} class="fa fa-arrow-right a-right"  aria-hidden="true"></i>

            </Link>
            : "Decks for this category coming soon!"}


          </ul>
        );
      });

      return(
        <div className="deck-info">
          <ul className="">
            <div className="deck-single-title">
              {decks}
            </div>
          </ul>
        </div>
      );
    }

  }

  export default ResultsIndex;

  {/* with Router */}

  {/*             <div className="author-title">
    Flashcard maker's ID: {this.props.author}</div>
    */}
