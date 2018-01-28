import React from 'react';
import { Link } from 'react-router-dom';
import CardShow from './card_show';

class BackButtons extends React.Component {
  constructor(props){
    super(props);
  }




  render(){
    debugger

    const index = this.props.deck ?
    ((this.props.index + 1) % this.props.length)
    : 0;

    const nextCardId = this.props.deck ?
    (this.props.deck.cardIds[index])
    : 0;

    debugger
    return(
      <div className="back-button-outer">
        <div className="how-well">
          How well did you know this?
        </div>
        { this.props.deck ? <Link
          className="back-button-container"
          onClick={() => {this.props.flipBack();}}
          to={
            {
              pathname: `/cards/${nextCardId}`,
              state: {
                deck: this.props.deck,
                currentCard: this.props.currentCard,
                back: false
              }
            }
          }>

          <div className="rank-1">1</div>
          <div className="rank-2">2</div>
          <div className="rank-3">3</div>
          <div className="rank-4">4</div>
          <div className="rank-5">5</div>
        </Link> : "" }
      </div>
    );

  }

}

export default BackButtons;
