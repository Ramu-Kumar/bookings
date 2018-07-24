import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RentalSearchInput extends Component {
  constructor() {
    super();

    this.searchInput = React.createRef();
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleSearch();
      this.searchInput.current.value = "";
    }
  };

  handleSearch = () => {
    const { history } = this.props;
    const city = this.searchInput.current.value;

    city ? history.push(`/rentals/${city}/homes`) : history.push("/rentals");
  };

  render() {
    return (
      <div className="form-inline my-2 my-lg-0">
        <input
          onKeyPress={this.handleKeyPress}
          ref={this.searchInput}
          className="form-control mr-sm-2 bwm-search"
          type="search"
          placeholder="Try &quot;New York&quot;"
          aria-label="Search"
        />
        <button
          onClick={this.handleSearch}
          className="btn btn-outline-success my-2 my-sm-0 btn-bwm-search"
          type="submit"
        >
          Search
        </button>
      </div>
    );
  }
}

export default withRouter(RentalSearchInput);
