import React from 'react'

export default class Child extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log(this)
        console.log('will mount')
    }

    componentDidMount() {
        console.log(this)
        console.log('did mount')
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will props' + nextProps.name)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should update')
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will update')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update')
    }

    render() {
        return  <div>
            <p>this is a child component</p>
            <p>{this.props.name}</p>
        </div>
    }
}
