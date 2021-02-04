/* eslint-disable import/extensions */
import React from 'react';
import Options from './Options.jsx';
import Languages from './Languages.jsx';
import Rating from './Rating.jsx';
import InfoPanel from './InfoPanel.jsx';
import Links from './Links.jsx';
import { Container } from './styles/styles';

class Metadata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      gameId: null,
      options: [],
      languages: [],
      rating: null,
      infoPanel: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3005/metadata/')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            gameId: result[0],
            options: result[1],
            languages: result[2],
            rating: result[3],
            infoPanel: result[4],
            isLoaded: true,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const {
      error, isLoaded, options, languages, rating, infoPanel, gameId,
    } = this.state;
    if (error) {
      console.error(error);
      return (
        <div>
          Error:
          {error.message}
        </div>
      );
    } if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <Container>
        <Options id={gameId} options={options} />
        <Languages id={gameId} languages={languages} />
        <Rating id={gameId} rating={rating} />
        <InfoPanel id={gameId} infoPanel={infoPanel} />
        <Links id={gameId} />
      </Container>
    );
  }
}

export default Metadata;
