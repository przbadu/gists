import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ onClick }) {
  return (
    <button className="btn btn-lg btn-primary" onClick={onClick}>
      Load More
    </button>
  );
}

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Pagination;
