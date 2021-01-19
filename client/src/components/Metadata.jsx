import React from "react";
import Options from "./Options.jsx";

class Metadata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            metadata: []
        }
    }

    getMetadata() {

    }
    componentDidMount() {
        fetch("/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        metadata: result
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
            console.log(error)
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}

export default Metadata;