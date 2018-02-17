import React from 'react';
import CardsIndex from './cards_index';
import onClickOutside from "react-onclickoutside";


class CardDelete extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      showDeleteButton: false
    };
  }

  toggleDelete () {
    this.setState({
      showDeleteButton: !this.state.showDeleteButton
    });
  }

  handleClickOutside(evt) {
    this.props.hideDeleteDeck();
    this.setState({
      showDeleteButton: false
    });
  }


  render(){
    const card = this.props.card;
    return(
      <div>
        <div className="card-settings-icon"
          onClick={() => this.toggleDelete()}>
          <i className="fa fa-cog settings-icon" aria-hidden="true"></i>
        </div>
        <div className="delete-container">
          { this.state.showDeleteButton ?
            <button className="delete-card-button"
              onClick={card ? () => this.props.deleteCard(card.id) : ""}
              >
              <i className="fa fa-minus-circle" aria-hidden="true"></i>
              Delete</button>
            : ""
          }
        </div>
      </div>
    );
  }

}

export default onClickOutside(CardDelete);
