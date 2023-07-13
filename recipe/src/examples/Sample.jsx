import { Component } from "react"
import WindowTracker from "./WindowTracker"

export default class Sample extends Component {

    state = {
        show: true
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return <div>
            <button onClick={() => this.toggle()}>Toggle</button>
            {
                this.state.show && <WindowTracker />
            }
        </div>
    }
}