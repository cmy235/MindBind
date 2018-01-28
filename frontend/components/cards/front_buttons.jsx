import React from 'react';
import { Link } from 'react-router-dom';
import CardShow from './card_show';

class FrontButtons extends React.Component {
  constructor(props){
    super(props);
  }

render() {


  return(
    <div className="front-button-container">
      click above to reveal answer!
    </div>
  );
}


}

export default FrontButtons;
