import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Pagination({ pagination, onNextClick, onPreviousClick }) {
  return (
    <nav aria-label="Page navigation">
      <ul className="pager">
        <li
          className={classNames('previous', { disabled: !!!pagination.prev })}
        >
          <a role="navigation" onClick={onPreviousClick}>
            <span aria-hidden="true">&larr;</span> Prev
          </a>
        </li>
        <li className={classNames('next', { disabled: !!!pagination.next })}>
          <a role="navigation" onClick={onNextClick}>
            Next <span aria-hidden="true">&rarr;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  pagination: PropTypes.object,
};

export default Pagination;
