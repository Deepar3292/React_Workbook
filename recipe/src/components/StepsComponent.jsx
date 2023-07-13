import { Component } from "react";

export default class Steps extends Component {
    render() {
        return <div>
            <p>
                {this.props.stepInfo}
            </p>
        </div>
    }
}