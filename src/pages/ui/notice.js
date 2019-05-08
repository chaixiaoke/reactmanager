import React from 'react'
import {Card, Button, notification} from "antd";
import './ui.less'

export default class Notices extends React.Component {

    openNotification = (type, description) => {
        if (description) {
            notification.config({
                placement: description
            })
        }
        notification[type]({
            message: 'hello',
            description: '欢迎来到英雄联盟'
        })
    }

    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
                </Card>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>topLeft</Button>
                    <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>topRight</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>bottomLeft</Button>
                    <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>bottomRight</Button>
                </Card>
            </div>
        )
    }
}
