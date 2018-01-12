import React from 'react';


class CardFront extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    return(
      <div class="card-front">
        {this.props.front ? this.props.front : ""}
      </div>
    );
  }


}

export default CardFront;
