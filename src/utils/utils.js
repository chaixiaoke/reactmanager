import React from 'react';
import { Select } from 'antd'
const Option = Select.Option;

export default {
    formateDate(time) {
        if (!time) return '';
        let date = new Date(time)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    },
    pagination(data, callback) {
        return {
            onChange: (current, pageSize) => {
                callback(current, pageSize)
            },
            current: data.result.page,
            pageSize: data.result.page_size,
            total: data.result.total || data.result.total_count,
            showTotal: () => {
                return `共${data.result.total || data.result.total_count}条`
            },
            showQuickJumper: true
        }
    },
    getOptionList(data) {
        if (!data) {
            return []
        }
        let options = [] // <Option value="0" key="all_key"></Option>
        data.map((item) => {
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options
    },
    /*
    * ETable行点击通用函数
    * @params {*选中行的索引} selectedRowKeys
    * @params {*选中行对象} selectedRows
    * */
    updateSelectedItem(selectedRowKeys, selectedRows, selectedIds){
        if (selectedIds) {
            this.setState({
                selectedRowKeys,
                selectedIds: selectedIds,
                selectedItem: selectedRows
            })
        } else {
            this.setState({
                selectedRowKeys,
                selectedItem: selectedRows
            })
        }
    }
}
