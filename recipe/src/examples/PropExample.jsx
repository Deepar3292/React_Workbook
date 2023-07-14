import { Component } from "react";
import { PropTypes } from "prop-types";

export default class PropExampleComponent extends Component {

    render() {
        return <div>
            {JSON.stringify(this.props)}
        </div>
    }
}

PropExampleComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    callback: PropTypes.func,
    address: PropTypes.object 
}