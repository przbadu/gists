import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Loading from '../Loading';
import GistEmbed from '../GistEmbed';

class Gist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gistId: this.props.match.params.gistId,
      gist: null,
      errors: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { gistId } = this.state;

    fetch(`https://api.github.com/gists/${gistId}`)
      .then(res => res.json())
      .then(gist => {
        this.setState({ gist, loading: false });
      })
      .catch(errors => {
        this.setState({ loading: false, errors });
      });
  }

  render() {
    const { gist, loading, errors } = this.state;

    return (
      <div className="col-sm-12">
        {loading === true ? (
          <Loading />
        ) : (
          <div className="gist-desc">
            <h2>{gist.description}</h2>
            <GistEmbed gistId={gist.id} />
          </div>
        )}

        {errors && <p>{errors.response}</p>}
      </div>
    );
  }
}

export default Gist;
