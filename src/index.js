import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// assets
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
