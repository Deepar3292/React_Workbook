import { Component } from "react";

export default class Users extends Component {

    state = {
        index: 1,
        user: {}
    }

    getUser(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => this.setState({
            user: data
        }))
    }

    componentDidMount() {
        this.getUser(this.state.index);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Update!!!")
        if(prevState.index !== this.state.index) {
            this.getUser(this.state.index);
        }
    }

    increment() {
        this.setState({
            index: this.state.index + 1
        })
    }

    decrement() {
        this.setState({
            index: this.state.index - 1
        })
    }

    render() {
        return <>
            <h1>User Details</h1>
            <br />
            <div>
                Username: {this.state.user.name} <br />
                Email: {this.state.user.email} <br />
                <button onClick={() => this.decrement()}>Prev</button>
                <button onClick={() => this.increment()}>Next</button>
            </div>
        </>
        // return <ReactFragment>
            
        // </ReactFragment>
    }
}