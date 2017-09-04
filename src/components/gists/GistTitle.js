import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  gistTitles: {
    padding: 10,
    backgroundColor: 'rgb(246, 246, 246)',
    marginBottom: 5,
  },
};

function GistTitle({ gist }) {
  return (
    <div key={gist.id} className="col-md-6 col-lg-4">
      <div style={styles.gistTitles}>
        <Link to={`/g/${gist.id}`}>
          {gist.description || '[no description]'}
        </Link>
      </div>
    </div>
  );
}

GistTitle.propTypes = {
  gist: PropTypes.objectOf({
    id: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default GistTitle;
