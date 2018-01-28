import React from 'react';


class CardFront extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    debugger
    return(
      <div className="flip-page">
        <div className="card-text">
          <div className="card-header">Q.
          <i class="fa fa-comment comment" aria-hidden="true"></i>
          </div>
          <div class="flashcard">
          {this.props.front}
        </div>
      </div>

    </div>
    );
  }


}

export default CardFront;
