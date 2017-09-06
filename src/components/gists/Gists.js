import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import paginator from 'parse-link-header';

// components
import Loading from '../Loading';
import GistTitle from './GistTitle';
import Pagination from '../Pagination';

// actions
import { findAllGists } from '../../actions/gists';

class Gists extends Component {
  static propTypes = {
    findAllGists: PropTypes.func.isRequired,
    pagination: PropTypes.object,
  };

  componentDidMount() {
    const defaultPagination = { next: { page: 1, per_page: 10 } };
    this.props.findAllGists(defaultPagination.next);
  }

  handleOnNextClick = () => {
    this.props.pagination.next &&
      this.props.findAllGists(this.props.pagination.next);
  };

  handleOnPreviousClick = () => {
    this.props.pagination.prev &&
      this.props.findAllGists(this.props.pagination.prev);
  };

  renderPagination(pagination) {
    if (pagination)
      return (
        <tr>
          <td colSpan="2">
            <Pagination
              pagination={pagination}
              onNextClick={this.handleOnNextClick}
              onPreviousClick={this.handleOnPreviousClick}
            />
          </td>
        </tr>
      );
    return null;
  }

  render() {
    const { gists, pagination, loading, errors } = this.props;

    if (loading === true) return <Loading />;
    if (errors === null) return <p className="text-danger">{errors.message}</p>;
    if (gists === null) return <h2>No gists to display</h2>;

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
            {this.renderPagination(pagination)}
          </thead>
          <tbody>
            {gists &&
              gists.map((gist, i) => (
                <GistTitle sn={i} key={gist.id} gist={gist} />
              ))}

            {this.renderPagination(pagination)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data, errors, headerLink, loading } = state.gists;
  const pagination = paginator(headerLink);

  return {
    gists: data,
    pagination,
    loading,
    errors,
  };
};

export default connect(mapStateToProps, { findAllGists })(Gists);
