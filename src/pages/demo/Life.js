import React from 'react'
import Child from './Child'
import {Button, Input} from 'antd'
import './index.less'

export default class life extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <div className="content">
            <p>React生命周期介绍</p>
            <Input/>
            <button onClick={this.handleAdd}>点击一下</button>
            <Button type="primary" onClick={this.handleClick.bind(this)}>antd点击一下</Button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}
