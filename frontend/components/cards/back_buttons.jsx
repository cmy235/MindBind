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
      <div>
        { this.props.deck ? <Link to={
          {
            pathname: `/cards/${nextCardId}`,
            state: {
              deck: this.props.deck,
              currentCard: this.props.currentCard,
              back: false
            }
          }
        }><div onClick={() => {this.props.flipBack();}}>
        Next
      </div>
      </Link> : "" }
    </div>
  );

}

}

export default BackButtons;
