import React, { Component } from 'react'
import Counter from './Counter/Counter'
import Input from './forms/Input/Input'

export default class CounterWithInput extends Component {

    state = {
        step: 1
    }

    inputChanges(value) {
        this.setState({
            step: value
        })
    }

    render() {
        return (
            <div>
                <Input number={true} emitChanges={this.inputChanges.bind(this)}></Input>
                <Counter step={this.state.step}></Counter>
            </div>
        )
    }
}