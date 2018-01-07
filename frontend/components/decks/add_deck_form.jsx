import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DecksIndexContainer from './decks_index_container';

class AddDeckForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showDeckModal: true,
      deckName: ""
    };

    this.closeDeckModal = this.closeDeckModal.bind(this);
    this.submitNewDeck = this.submitNewDeck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/decks');
    }
  }

  closeDeckModal() {
    this.setState({
      showDeckModal: false
    });
  }

  submitNewDeck(e){
    e.preventDefault();
    this.props.addDeck({});
  }

  updateDeckName(deckName){
    return (event) => {
      this.setState({ [deckName]: event.target.value });
    };
  }

  render() {

    const backToIndex = (
      this.state.showDeckModal ?
        null :
        <DecksIndexContainer />
    );

    return(
      <div>
      {backToIndex}
      <div className="modal-overlay">
        <div className="add-deck-form">
          <form onSubmit={this.submitNewDeck}>
            <p className="add-deck-title">New Deck</p>
              <input onChange={this.updateDeckName('deckName')}
                value={this.state.deck}
                className="form-input"
                type="text"
                placeholder="e.g., European History">
              </input>
              <div className="form-buttons">
                <button onClick={this.closeDeckModal}
                  className="cancel-button"
                  type="button">Cancel</button>
                <span onClick={this.props.addDeck}>
                  <button className="save-button btn-primary" type="button">Save</button>
                </span>
              </div>
          </form>
        </div>
      </div>
      </div>
    );
  }

}

export default AddDeckForm;
