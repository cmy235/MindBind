import React from 'react';


class CardBack extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    return(
      <div>
          <div className="card-text">
            <div class="flashcard">
            {this.props.back}
          </div>
        </div>

      </div>
    );
  }


}

export default CardBack;
