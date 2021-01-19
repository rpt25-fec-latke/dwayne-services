import React from 'react';
import ReactDOM from 'react-dom';
import Metadata from "./components/Metadata.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
      return (
        <div>
            <Metadata />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))