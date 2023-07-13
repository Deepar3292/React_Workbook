import { Component } from "react"
import ChildComponent from "./Child"

export default class ParentComponent extends Component {
    state = {
        name: 'Bob',
        age: 18
    }

    increment() {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        return <div>
            Name: {this.state.name} <br />
            Age: {this.state.age} <br />
            <button onClick={() => this.increment()}>Increment</button>
            <ChildComponent name={this.state.name} />
        </div>
    }
}