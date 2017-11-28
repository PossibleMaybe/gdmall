import React from 'react';
import ReactDOM from 'react-dom';
import './common/reset.css';
import './common/common.css';
import './common/global.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
