import React from 'react';


class CardFront extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showFront: true
    };
  }


  render() {
debugger
    return(
      <div class="card-front">
        {
          this.state.showFront ? this.props.front : ""
        }
      </div>
    );
  }


}

export default CardFront;
