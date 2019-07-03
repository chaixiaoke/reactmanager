import React from 'react'
import {Card} from "antd";
import echartTheme from '../echartTheme'
// import echartTheme from '../themeLight'
// 按需导入
import echarts from 'echarts/lib/echarts'
// 导入柱形图
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

export default class Line extends React.Component {

    componentWillMount() {
        echarts.registerTheme('Imooc', echartTheme)
    }

    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
                    itemStyle : {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        return option
    }

    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['OFO订单量', '摩拜订单量']
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO订单量',
                    type: 'line',
                    data: [1200, 3000, 4500, 6000, 7000, 12000, 2000]
                },
                {
                    name: '摩拜订单量',
                    type: 'line',
                    data: [1000, 2000, 3500, 3000, 5000, 9000, 800]
                }
            ]
        }
        return option
    }

    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
                    areaStyle: {},
                    itemStyle : {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        return option
    }

    render() {
        return (
            <div>
                <Card title="折线图表1">
                    <ReactEcharts
                        option={this.getOption()}
                        theme="Imooc"
                        style={{height: 500}}
                    />
                </Card>
                <Card title="折线图表2" style={{marginTop: 10}}>
                    <ReactEcharts
                        option={this.getOption2()}
                        theme="Imooc"
                        style={{height: 500}}
                    />
                </Card>
                <Card title="折线图表3" style={{marginTop: 10}}>
                    <ReactEcharts
                        option={this.getOption3()}
                        theme="Imooc"
                        style={{height: 500}}
                    />
                </Card>
            </div>
        );
    }
}
