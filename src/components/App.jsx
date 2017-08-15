import React from 'react';
import Navigation from './navbar';
import { Gists } from './gists';

function App() {
  return (
    <div className="gists-wrapper">
      <Navigation />
      <Gists />
    </div>
  );
}

export default App;
