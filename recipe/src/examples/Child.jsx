import { Component } from "react"

export default class ChildComponent extends Component {

    shouldComponentUpdate(prevProps, prevState) {
        if(prevProps.name !== this.props.name) {
            return true;
        }
        return false;
    }

    render() {
        console.log("re-render child!!!")
        return <div>
            Name in Child Component: {this.props.name}  
        </div>
    }
}