import React from 'react';


class CardBack extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showBack: false
    };
  }


  render() {
    return(
      <div>
        <div class="card-back">
          {this.state.showBack ? this.props.back : ""}
        </div>
        <button className="flip-button"
          onClick={() => this.setState({ showBack: true })}
        >See answer!</button>
      </div>
    );
  }


}

export default CardBack;
