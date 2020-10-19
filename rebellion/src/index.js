import React from 'react';
import {render} from 'react-dom';
import Index from './index.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes/Routes'

render(
        <Router>
            <Routes />
        </Router>,  
        document.getElementById('root')
);


