import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count: this.props.initAt ? this.props.initAt : 0
    }

    increment() {
        this.setState({
            count: this.state.count += 1
        })
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <h3>Counting: {this.state.count}</h3>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}