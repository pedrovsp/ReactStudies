import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        count: this.props.initAt ? this.props.initAt : 0,
        step: this.props.step ? this.props.step : 1,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.step !== this.props.step) {
            this.setState({ step: Number(this.props.step) });
        }
    }

    increment() {
        const newValue = this.state.count + this.state.step
        this.setState({
            count: newValue,
        })
    }

    setStep(newValue) {
        this.setState({
            step: newValue
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