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
    this.props.closeCardForm();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleClickOutside(evt) {
    this.props.closeCardForm();
  }


  render() {
    return(
      <div>
        <div className="modal-overlay"
          onClick={() => this.props.closeCardForm()}>
        </div>

        <form onSubmit={this.handleSubmit}
          className="add-card-form">

          <textarea rows="4" cols="50"
            placeholder="e.g., In which country can you find 8 of the 10 highest mountains?"
            value={this.state.front}
            onChange={this.update('front')}
            className="add-card-input"
            ></textarea>
          <textarea rows="4" cols="50"

            placeholder="Nepal"
            value={this.state.back}
            onChange={this.update('back')}
            className="add-card-input"
            ></textarea>


          <input className="save-button" type="submit" value="Add Card!"></input>

        </form>
      </div>

    );
  }

}

export default AddCardForm;
