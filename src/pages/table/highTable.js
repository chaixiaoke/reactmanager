import React from 'react'
import {Card, Table, Modal, Button, message, Badge} from 'antd'
import axios from './../../axios/index'

export default class HighTable extends React.Component {

    state = {
        dataSource2: []
    }

    params = {
        page: 1
    }

    componentWillMount() {
        this.request()
    }

    // 动态获取mock数据
    request = () => {
        let _this = this
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: _this.params.page
                }
            }
        }).then(res => {
            res.result.list.map((item, index) => {
                item.key = index
            })
            this.setState({
                dataSource: res.result.list
            })
        })
    }

    handleChange = (pagination, filters, sorter) => {
        console.log(sorter)
        this.setState({
            sortOrder: sorter.order
        })
    }

    handleDelete = (item) => {
        let id = item.id;
        Modal.confirm({
            title: '确认',
            content: '您确认要删除此条数据吗？',
            onOk: () => {
                message.success('删除成功');
                this.request()
            }
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                key: 'id',
                width: 80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'username',
                width: 80,
                dataIndex: 'username'
            },
            {
                title: '性别',
                key: 'sex',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(status) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[status]
                }
            },
            {
                title: '爱好',
                key: 'interest',
                width: 80,
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '健身',
                        '6': '麦霸'
                    }
                    return config[interest]
                }
            },
            {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                width: '13%',
                dataIndex: 'time'
            }
        ]
        const columns2 = [
            {
                title: 'id',
                key: 'id',
                width: 60,
                fixed: 'left',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'username',
                width: 80,
                fixed: 'left',
                dataIndex: 'username'
            },
            {
                title: '性别',
                key: 'sex',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '性别',
                key: 'sex2',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '性别',
                key: 'sex3',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '性别',
                key: 'sex4',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '性别',
                key: 'sex5',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '性别',
                key: 'sex6',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(status) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[status]
                }
            },
            {
                title: '爱好',
                key: 'interest',
                width: 80,
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '健身',
                        '6': '麦霸'
                    }
                    return config[interest]
                }
            },
            {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                width: 150,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                width: 80,
                fixed: 'right',
                dataIndex: 'time'
            }
        ]
        const columns3 = [
            {
                title: 'id',
                key: 'id',
                width: 60,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'username',
                width: 80,
                dataIndex: 'username'
            },
            {
                title: '性别',
                key: 'sex',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: 'age',
                width: 80,
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(status) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[status]
                }
            },
            {
                title: '爱好',
                key: 'interest',
                width: 80,
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '健身',
                        '6': '麦霸'
                    }
                    return config[interest]
                }
            },
            {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                width: 150,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                width: 80,
                dataIndex: 'time'
            }
        ]
        const columns4 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'username',
                dataIndex: 'username'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age'
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(status) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[status]
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': <Badge status='success' text="游泳"/>,
                        '2': <Badge status='processing' text="打篮球"/>,
                        '3': <Badge status='default' text="踢足球"/>,
                        '4': <Badge status='error' text="跑步"/>,
                        '5': <Badge status='warning' text="健身"/>,
                        '6': <Badge status='success' text="麦霸"/>
                    }
                    return config[interest]
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render: (text, item) => {
                    return <Button size="small" onClick={(item) => {this.handleDelete(item)}}>删除</Button>
                }
            }
        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y: 300}}
                    />
                </Card>
                <Card title="两侧固定" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x: 1130}}
                    />
                </Card>
                <Card title="表格排序" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        );
    }
}
