import * as React from "react";

import DogInfo from "./DogInfo";

export interface ResultsContainerState {
    source: [string, string][]
}

export interface ResultsContainerProps {
    result: string
}

/** Renders ResultsContainer consisting of DogInfo-components. */
class ResultsContainer extends React.Component<ResultsContainerProps, ResultsContainerState> {
    state = {
        source: []
    }

    constructor(props: ResultsContainerProps) {
        super(props)
        this.fetchResultsData();
    }

    render() {
        return (
            <div className="ResultsContainer">
                {this.state.source.map((value, index) => {
                    console.log(value)
                    return <DogInfo key={index} dogType={this.props.result} source={value} />
                })}
            </div>
        )
    }

    /**
     * Catches errors and logs in the console.
     * @param error The error that occured.
     * @param errorInfo Info on said error.
     */
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo)
    }

    /**
     * Fetches DogInfo data and sets source state as the fetched data.
     */
    fetchResultsData() {
        fetch("./src/components/doginfo.json")
            .then(response => response.json())
            .then(data => {
                this.setState({ source: Object.entries(data[this.props.result][0]) })
            })
            .catch(error => console.error(error))
    }
}

export default ResultsContainer;