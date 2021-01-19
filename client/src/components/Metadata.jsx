import React from "react";

class Metadata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

        let optionsList = this.state.options.map((option, i) => {
            return <Options  props={option[i]} key={'Option' + i} />
        })

        return (
            <div>
                {optionsList}
            </div>
        )
    }
}

export default Metadata;