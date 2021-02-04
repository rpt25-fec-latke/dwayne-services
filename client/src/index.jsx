/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Metadata from './components/Metadata.jsx';

class App extends React.Component {
  constructor() {
    super(props);
  }

  render() {
    return (
      <div>
        <Metadata />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
