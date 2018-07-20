// bootstrapping, 
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App'; //Virtual dom

let root = document.getElementById('root'); //Real Dom, index.html

// uni directional (virtual dom to real dom, not vice versa


ReactDOM.render(<App />,
                root
)