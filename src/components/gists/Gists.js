import React, { Component } from 'react';
import axios from 'axios';
import paginator from 'parse-link-header';

import Loading from '../Loading';
import GistTitle from './GistTitle';
import Pagination from '../Pagination';

import { loadGists } from './../../utils/gists';

class Gists extends Component {
  state = {
    gists: null,
    loading: true,
    errors: null,
    pagination: null,
  };

  constructor() {
    super();
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    loadGists()
      .then(response => {
        const gists = response.data;
        const pagination = paginator(response.headers.link);
        this.setState({ gists, pagination, loading: false });
      })
      .catch(errors => {
        this.setState({ loading: false, errors });
      });
  }

  loadMore() {
    loadGists()
      .then(response => {
        debugger;
        const gists = { ...this.state.gists, ...response.data };
        const pagination = paginator(response.headers.link);
        this.setState({ gists, pagination, loading: false });
      })
      .catch(errors => {
        this.setState({ loading: false, errors });
      });
  }

  render() {
    const { errors, gists, pagination, loading } = this.state;
    if (loading === true) return <Loading />;
    if (gists === null) return <h2>No gists to display</h2>;
    if (errors === null) return <p className="text-danger">{errors.message}</p>;

    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th />
              <th>
                <h2>My Gists</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {gists &&
              gists.map((gist, i) => (
                <GistTitle sn={i} key={gist.id} gist={gist} />
              ))}

            <tr>
              <td colSpan="2">
                {pagination && (
                  <Pagination pagination={pagination} onClick={this.loadMore} />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Gists;
