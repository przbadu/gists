import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Loading from '../Loading';
import GistEmbed from '../GistEmbed';

// actions
import { findGist } from '../../actions/gists';

class Gist extends Component {
  static propTypes = {
    findGist: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { gistId } = this.props.match.params;
    this.props.findGist(gistId);
  }

  render() {
    const { gist } = this.props;

    return (
      <div className="col-sm-12">
        <div className="gist-desc">
          <nav aria-label="Page navigation">
            <ul className="pager">
              <li className="previous">
                <Link to="/">
                  <span aria-hidden="true">&larr;</span> Go Back
                </Link>
              </li>
            </ul>
          </nav>
          <h2>{gist.description}</h2>
          {gist.id && <GistEmbed gistId={gist.id} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { gist: state.gists };
};

export default connect(mapStateToProps, { findGist })(Gist);
