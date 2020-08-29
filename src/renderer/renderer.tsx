/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the styles here to process them with webpack
import '@public/style.css';

ReactDOM.render(
  <div className='app'>
    <h1>I love you Katherine</h1>
    
  </div>,
  document.getElementById('app')
);
