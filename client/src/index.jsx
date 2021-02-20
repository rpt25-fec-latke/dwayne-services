/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Metadata from './components/Metadata.jsx';
import { CenterContainer } from './components/styles/styles';

const App = () => (
  <CenterContainer>
    <Metadata />
  </CenterContainer>
);

ReactDOM.render(<App />, document.getElementById('app'));
