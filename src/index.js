import React from 'react';
import ReactDOM from 'react-dom';

// assets
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css';

import Routes from './config/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
