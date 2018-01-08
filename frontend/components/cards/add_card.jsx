import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AddDeckContainer from './add_deck_container';

class AddCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      front: "",
      back: ""
    };

    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const deck = this.state;
    this.props.addCard(card);
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
          placeholder="i.e., There are __ continents?"
          value={this.state.password}
          onChange={this.update('front')}
          className="input-front"
        />

        <input type="text"
          placeholder="i.e., 7"
          value={this.state.password}
          onChange={this.update('back')}
          className="input-back"
        />

      <input className="add-card-button" type="submit" value="Add Card"></input>

      </form>

    );
  }







}
