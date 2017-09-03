import React, { Component } from "react";

class Gists extends Component {
  state = {
    gists: null,
    loading: true
  };

  componentDidMount() {
    fetch("https://api.github.com/users/przbadu/gists")
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists, loading: false });
      });
  }

  render() {
    const { gists } = this.state;

    return (
      <div className="row">
        {gists &&
          gists.map(gist => (
            <div key={gist.id} className="col-md-6 col-lg-4">
              {gist.description || "[no description]"}
            </div>
          ))}
      </div>
    );
  }
}

export default Gists;
