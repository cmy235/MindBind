import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DecksIndexContainer from './decks_index_container';

class AddDeckForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.submitNewDeck = this.submitNewDeck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/decks');
    }
  }


  submitNewDeck(e){
    e.preventDefault();
    const deck = this.state;
    this.props.addDeck(deck);
  }

  updateDeckName(deck){
    return (e) => this.setState({
      [deck]: e.currentTarget.value
    });
  }

  render() {

    return(
      <div className="modal-overlay">
        <div className="add-deck-form">
          <form onSubmit={this.submitNewDeck}>
            <p className="add-deck-title">New Deck</p>
              <input
                placeholder="e.g., European History"
                value={this.state.title}
                onChange={this.updateDeckName('title')}
                className="form-input"
                type="text">
              </input>
              <div className="form-buttons">
                <button onClick={this.props.closeDeckModal}
                  className="cancel-button"
                  >Cancel
                </button>
                <button className="save-button">Save</button>
              </div>
          </form>
        </div>
      </div>

    );
  }
}

export default AddDeckForm;
