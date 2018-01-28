import React from 'react';
import { Link } from 'react-router-dom';
import CardShow from './card_show';

class CardBack extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    debugger
    return(
      <div>
        <div className="card-text">
          <div className="card-header">A.

          <i class="fa fa-comment comment" aria-hidden="true"></i>
          </div>
          <div class="flashcard">
            {this.props.back}
          </div>
        </div>
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
