import { Component } from "react"

export default class WindowTracker extends Component {

    state = {
        windowWidth: window.innerWidth
    }

    watchWidth = () => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.watchWidth)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.watchWidth)
    }

    render() {
        return <div>
            <h1>Window Width: {this.state.windowWidth} </h1>
        </div>
    }
}