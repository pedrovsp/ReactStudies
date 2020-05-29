import './Counter.css'
import React, { Component } from 'react';
import { Button, ButtonTypes } from '../Button/Button'

export default class Counter extends Component {

    state = {
        count: this.props.initAt ? this.props.initAt : 0,
    }

    increment() {
        const newValue = this.state.count + this.props.step
        this.setState({
            count: newValue,
        })
    }


    decrement() {
        const newValue = this.state.count - this.props.step
        this.setState({
            count: newValue,
        })
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <h3>Counting: {this.state.count}</h3>
                <div className="ButtonBox">
                    <Button type={ButtonTypes.Round} text='+' function={this.increment.bind(this)}></Button>
                    <Button type={ButtonTypes.Round} text='-' function={this.decrement.bind(this)}></Button>
                </div>
            </div>
        )
    }
}