import React from 'react';
import SearchContainer from './search';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const query = this.state.query;
    debugger
    this.props.searchCategories({query});
  }

  render(){
debugger
    return(
      <div>
        <form onSubmit={this.handleSubmit}
          className="search-form">
            <input type="text"
              placeholder="e.g., math"
              value={this.state.query}
              onChange={this.update('query')}
              className="input-query"
            />
          <button  className="modal-signup-button"> Search </button>
        </form>

        <div className="results"> Results: {this.props.results}</div>
      </div>
    );
  }

}

export default Search;
