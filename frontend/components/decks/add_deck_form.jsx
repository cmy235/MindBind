import React from 'react';

class AddDeckForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showDeckModal: true
    };

    this.closeDeckModal = this.closeDeckModal.bind(this);
  }

  closeDeckModal() {
    this.setState({
      showDeckModal: false
    });
  }

  render() {
    debugger
    return(
      <div className="modal-overlay">
      <div className="add-deck-form">
        <form>
          <p className="add-deck-title">New Deck</p>
            <input className="form-input" type="text" placeholder="e.g., European History">
            </input>
          <div className="form-buttons">
            <span onClick={this.closeDeckModal}>
              {this.state.showDeckModal ?
                null :
                <DecksIndexContainer />
              }
              <button className="cancel-button" type="button">Cancel</button>
            </span>
            <span onClick={this.props.addDeck}>
              <button className="save-button btn-primary" type="button">Save</button>
            </span>
          </div>
        </form>
      </div>
    </div>
    );
  }

}

export default AddDeckForm;
