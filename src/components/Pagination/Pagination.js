import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ pagination, onClick }) {
  return (
    <div className="pagination">
      <div className="clearfix" />
      <div className="col-sm-12">
        <button className="btn btn-lg btn-primary" onClick={onClick}>
          Load More
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.object,
  onClick: PropTypes.func,
};

export default Pagination;
