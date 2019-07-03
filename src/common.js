import React from 'react'
import {Row} from "antd"
import Header from './components/Header'
import './style/common.less'

export default class Common extends React.Component {

    render() {
        return (
            <div>
                <Row className="simple-page">
                    <Header menuType="second"/>
                </Row>
                <Row className="content" style={{padding: 50}}>
                    {this.props.children}
                </Row>
            </div>
        )
    }
}
