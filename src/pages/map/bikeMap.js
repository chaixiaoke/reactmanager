import React from 'react'
import axios from '../../axios/index'
import {Card, Form} from "antd";
import BaseForm from '../../components/BaseForm/index'

export default class BikeMap extends React.Component{

    state = {}

    params = {}

    formList = [
        {
            type: 'SELECT',
            label: '城市',
            field: 'city',
            placeholder: '全部',
            initialValue: '0',
            list: [{id: '0', name: '全部'},{id: '1', name: '北京'},{id: '2', name: '上海'},{id: '3', name: '禹州'}]
        }, {
            type: '时间查询'
        }, {
            type: 'SELECT',
            label: '订单状态',
            field: 'order_status',
            placeholder: '全部',
            initialValue: '0',
            width: 100,
            list: [{id: '0', name: '全部'},{id: '1', name: '进行中'},{id: '2', name: '行程结束'}]
        }
    ]

    componentDidMount() {
        this.requestList()
    }

    requestList = () => {
        axios.ajax({
            url: '/map/bike_list',
            data: {
                params: this.params
            }
        }).then(res => {
            this.setState({
                total_count: res.result.total_count
            })
            this.renderMap(res)
        })
    }

    // 查询表单
    handleFilterSubmit = (params) => {
        this.params = params
        this.requestList()
    }

    // 地图渲染
    renderMap = (res) => {
        let list = res.result.route_list
        this.map = new window.BMap.Map('container')
        let gps1 = list[0].split(',')
        let startPoint = new window.BMap.Point(gps1[0], gps1[1])
        let gps2 = list[list.length - 1].split(',')
        let endPoint = new window.BMap.Point(gps2[0], gps2[1])
        this.map.centerAndZoom(endPoint, 11)
        // 设置起始点位
        let startPointIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        })
        let bikeMarkerStart = new window.BMap.Marker(startPoint, {icon: startPointIcon})
        this.map.addOverlay(bikeMarkerStart)
        let endPointIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        })
        let bikeMarkerEnd = new window.BMap.Marker(endPoint, {icon: endPointIcon})
        this.map.addOverlay(bikeMarkerEnd)

        // 绘制车辆行驶路线
        let trackPoiot = []
        for (let i = 0; i < list.length; i++) {
            let point = list[i].split(',')
            trackPoiot.push(new window.BMap.Point(point[0], point[1]))
        }
        let polyline = new window.BMap.Polyline(trackPoiot, {
            strokeColor: '#ef4136',
            strokeWeight: 2,
            strokeOpacity: 1
        })
        this.map.addOverlay(polyline)

        // 绘制服务区
        let servicePointList = []
        let serviceList = res.result.service_list
        serviceList.forEach(item => {
            servicePointList.push(new window.BMap.Point(item.lon, item.lat))
        })
        let polyServiceline = new window.BMap.Polyline(servicePointList, {
            strokeColor: '#ef4136',
            strokeWeight: 3,
            strokeOpacity: 1
        })
        this.map.addOverlay(polyServiceline)

        // 添加地图中的自行车图标
        let bikeList = res.result.bike_list
        let bikeIcon = new window.BMap.Icon('/assets/bike.jpg', new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        })
        bikeList.forEach(item => {
            let p = item.split(',')
            let point = new window.BMap.Point(p[0], p[1])
            let bikeMarker = new window.BMap.Marker(point, {icon: bikeIcon})
            this.map.addOverlay(bikeMarker)
        })

        // 添加地图控件
        this.addMapControl()
    }

    // 添加地图控件
    addMapControl = () => {
        let map = this.map;
        // 左上角，添加比例尺
        var top_right_control = new window.BMap.ScaleControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
        var top_right_navigation = new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
        //添加控件和比例尺
        map.addControl(top_right_control);
        map.addControl(top_right_navigation);
        map.enableScrollWheelZoom(true);
        // legend.addLegend(map);
    };

    render() {
        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilterSubmit}/>
                </Card>
                <Card style={{marginTop: 10}}>
                    <div>共{this.state.total_count}辆</div>
                    <div id="container" style={{height: 500}}></div>
                </Card>
            </div>
        );
    }
}
