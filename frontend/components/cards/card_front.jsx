import React from 'react';


class CardFront extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    debugger
    return(
        <div className="card-text">
          <div class="flashcard">
          {this.props.front}
        </div>
      </div>
    );
  }


}

export default CardFront;
