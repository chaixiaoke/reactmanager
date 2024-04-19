import JsonP from 'jsonp'
import axios from 'axios'
import {Modal} from "antd";
import Utils from "../utils/utils";

export default class Axios {
    static requestList (_this,url,params, isMock) {
        const data = {
            params,
            isMock
        }
        this.ajax({
            url,
            data
        }).then(res => {
            if (res.result) {
                let key = res.result.item_list ? 'item_list' : 'list'
                let list = res.result[key].map((item, index) => {
                    item.key = index
                    return item
                })
                _this.setState({
                    list: list,
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current
                        _this.requestList()
                    }),
                    selectedRowKeys: [] // 清除选择项
                })
            }
        })
    }

    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response && response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options){
        let loading = document.getElementById('ajaxLoading');
        if (options.data && options.data.isShowLoading !== false) {
            loading.style.display = 'block'
        }
        // let baseApi = 'https://www.easy-mock.com/mock/5cd957dff13de80467c5be4a/mockapi'
        let baseApi = ''
        if (options.data.isMock) {
            baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api'
        } else {
            baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api'
        }
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then(response => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading.style.display = 'none'
                }
                if (response.status == '200') {
                    let res = response.data
                    if (res.code == 200 ||  res.code == 0) {
                        resolve(res)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.msg || '暂无更多数据'
                        })
                    }
                } else {
                    reject(response.data)
                }
            }).catch(err => {
                loading.style.display = 'none'
                Modal.info({
                    title: '提示',
                    content: err.msg || '请求数据失败'
                })
            })
        })
    }
}
