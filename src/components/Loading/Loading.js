import React from 'react';
import spinner from './loading-img.png';
import './styles.css';

function Loading() {
  return (
    <div className="loading-wrapper">
      <img src={spinner} className="loading" alt="loading..." />
    </div>
  );
}

export default Loading;
