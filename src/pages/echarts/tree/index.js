import React from 'react';
import {Card} from "antd";
import echartTheme from '../echartTheme';
// import echartTheme from '../themeLight';
// 按需导入
import echarts from 'echarts/lib/echarts';
// 导入柱形图
import 'echarts/lib/chart/tree';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import axios from '../../../axios'

export default class Tree extends React.Component {

    data = {
        name: 'grandFather',
        children: [
            {
                name: 'father',
                children: [{
                        name: 'i'
                    }, {
                        name: 'tiantian'
                    }
                ]
            }, {
                name: 'second father',
                children: [{
                    name: 'jiabing'
                }, {
                    name: 'zeyuan'
                }
                ]
            }, {
                name: 'third father',
                children: [{
                    name: 'haojia'
                }, {
                    name: 'jiacheng'
                }
                ]
            }, {
                name: 'forth father',
                children: [{
                    name: 'jialu'
                }, {
                    name: 'yiyang'
                }
                ]
            }
        ]
    }

    componentDidMount() {
        echarts.registerTheme('Imooc', echartTheme)
    }

    getOption = (data) => {
        return {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    data: [data],
                    left: '2%',
                    right: '2%',
                    top: '8%',
                    bottom: '20%',
                    symbol: 'emptyCircle',
                    orient: 'vertical',
                    expandAndCollapse: true,
                    label: {
                        normal: {
                            position: 'top',
                            // rotate: -90,
                            verticalAlign: 'middle',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    leaves: {
                        label: {
                            normal: {
                                position: 'bottom',
                                rotate: -90,
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
                    animationDurationUpdate: 750
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Card title="树图">
                    <ReactEcharts
                        option={this.getOption(this.data)}
                        theme="Imooc"
                        style={{height: 800}}
                    />
                </Card>
            </div>
        );
    }
}
