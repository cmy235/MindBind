import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AddCardContainer from './add_card_container';

class AddCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      front: "",
      back: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const card = this.state;
    const deckId = this.props.match.params.deckId;
    let cardObj = Object.assign({}, card, {deck_id: deckId});
    this.props.addCard(cardObj);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}
        className="add-card-form">

        <input type="text"
          placeholder="There are __ continents?"
          value={this.state.front}
          onChange={this.update('front')}
          className="add-card-input"
          />

        <input type="text"
          placeholder="7"
          value={this.state.back}
          onChange={this.update('back')}
          className="add-card-input"
          />

        <input className="add-card-button" type="submit" value="Add Card!"></input>

      </form>
    );
  }

}

export default AddCardForm;
