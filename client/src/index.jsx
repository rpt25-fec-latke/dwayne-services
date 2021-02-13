/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Metadata from './components/Metadata.jsx';

const App = () => (
  <div>
    <Metadata />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
