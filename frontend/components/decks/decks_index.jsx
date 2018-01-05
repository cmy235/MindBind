
import React from 'react';

class DecksIndex extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.props.requestDecks();
  }

  render (){
    const decks = Object.values(this.props.decks);

    return(
      <ul>
        <li>decks</li>
      </ul>
    );
  }
}

export default DecksIndex;
