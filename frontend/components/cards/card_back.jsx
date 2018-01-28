import React from 'react';
import { Link } from 'react-router-dom';
import CardShow from './card_show';

class CardBack extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    debugger

    const index = this.props ?
    ((this.props.index + 1) % this.props.length)
    : 0;

    const nextCardId = this.props ?
    (this.props.deck.cardIds[index])
    : 0;

    debugger
    return(
      <div>
        <div className="card-text">
          <div class="flashcard">
            {this.props.back}
          </div>
        </div>
        <button className="next-button">Next
  { console.log("ELO")}
      </button>

    </div>
  );
}


}

export default CardBack;

{/*
  // original Link --> includes passing props to link

  { this.props ? <Link to={
  {    pathname: `/cards/${nextCardId}`,
  state: {
  deck: this.props.deck,
  currentDeckId: currentDeckId
  }
  }
  }
  >
  </Link> : "" }


  */}
