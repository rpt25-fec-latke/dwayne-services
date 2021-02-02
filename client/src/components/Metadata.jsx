import React from "react";
import Options from "./Options.jsx";
import Languages from "./Languages.jsx";
import Rating from "./Rating.jsx";
import InfoPanel from "./InfoPanel.jsx";
import Links from "./Links.jsx";
import { Container } from './styles/styles'

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
            infoPanel: []
        }
    }

    getMetadata() {

    }

    componentDidMount() {
        fetch("/metadata")
            .then((res) => {
                return res.json()
            })
            .then(
                (result) => {
                    this.setState({
                        gameId: result[0],
                        options: result[1],
                        languages: result[2],
                        rating: result[3],
                        infoPanel: result[4],
                        isLoaded: true
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, metadata } = this.state;
        if (error) {
            console.error(error)
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <Container>
                    <Options id={this.state.gameId} options={this.state.options} />
                    <Languages id={this.state.gameId} languages={this.state.languages}/>
                    <Rating id={this.state.gameId} rating={this.state.rating} />
                    <InfoPanel id={this.state.gameId} infoPanel={this.state.infoPanel} />
                    <Links id={this.state.gameId} />
                </Container>
            )
        }
    }
}

export default Metadata;