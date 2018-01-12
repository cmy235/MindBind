import React from 'react';


class CardBack extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    return(
      <div class="card-back">
        { this.props.back ? this.props.back : ""}
      </div>
    );
  }


}

export default CardBack;
