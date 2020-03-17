import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class SearchBar extends Component {
  state = {
    search: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.history.push("/city-selected");
  };

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="md-form mt-0">
          <input
            className="form-control"
            type="text"
            name="search"
            placeholder="Search a destination"
            onChange={this.onChange}
            value={search}
          />
        </div>
      </form>
    );
  }
}

export default withRouter(SearchBar);
