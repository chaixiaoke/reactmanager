import React from 'react'
import {Card, Spin, Icon, Alert} from "antd";
import './ui.less'

export default class Loadings extends React.Component {

    render() {
        const icon = <Icon type="loading" style={{fontSize: 24}}/>
        return (

            <div>
                <Card title="Spin用户" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin: '0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{marginLeft: 10}}/>
                </Card>
                <Card title="内容遮盖" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎来到React实战课程"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到React实战课程"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到React实战课程"
                            type="warning"
                        />
                    </Spin>
                    <Spin
                        indicator={icon}
                        tip="Loading">
                        <Alert
                            message="React"
                            description="欢迎来到React实战课程"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
