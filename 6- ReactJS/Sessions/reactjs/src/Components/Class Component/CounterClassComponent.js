import React, { Component } from "react";

class CounterClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, msg: 'hi' };
    }

    render() {
        return (
            <div className="my-5">
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click Me</button>
            </div>
        )
    }
}
export default CounterClassComponent