import React, { Component } from 'react';
import Loading from '../Loading';
import GistTitle from './GistTitle';

class Gists extends Component {
  state = {
    gists: null,
    loading: true,
    errors: null,
  };

  componentDidMount() {
    fetch('https://api.github.com/users/przbadu/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists, loading: false });
      })
      .catch(errors => {
        this.setState({ loading: false, errors });
      });
  }

  render() {
    const { errors, gists, loading } = this.state;

    return (
      <div className="row">
        {loading === true ? (
          <Loading />
        ) : (
          gists && gists.map(gist => <GistTitle gist={gist} />)
        )}

        {errors && <p className="text-danger">{errors.message}</p>}
      </div>
    );
  }
}

export default Gists;
