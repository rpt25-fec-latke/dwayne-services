import React from "react";
import Options from "./Options.jsx";
import Languages from "./Languages.jsx";
import Ratings from "./Ratings.jsx";
import InfoPanel from "./InfoPanel.jsx";
import Links from "./Links.jsx";

class Metadata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            metadata: {}
        }
    }

    getMetadata() {

    }
    componentDidMount() {
        fetch("/metadata")
            .then((res) => {
                console.log('result of fetch:', res);
                return res.json()
            })
            .then(
                (result) => {
                    console.log('result of res.json()', result);
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
            console.log('Loading');
            return <div>Loading...</div>
        } else {
            console.log('Metadata', metadata);
            return (
                <div>
                    <Options data={metadata} />
                    <Languages data={metadata} />
                    <Ratings data={metadata} />
                    <InfoPanel data={metadata} />
                    <Links data={metadata} />
                </div>
            )
        }
    }
}

export default Metadata;