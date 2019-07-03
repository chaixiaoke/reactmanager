import React from 'react'
import {Table} from "antd";
import './index.less'

export default class ETable extends React.Component {

    state = {}

    onRowClick = (record, index) => {
        let rowSelection = this.props.rowSelection
        if(rowSelection === 'checkbox'){
            let selectedRowKeys = this.props.selectedRowKeys
            let selectedIds = this.props.selectedIds
            let selectedItem = this.props.selectedItem || []
            if (selectedIds) {
                const i = selectedIds.indexOf(record.id)
                if (i == -1) {
                    selectedIds.push(record.id)
                    selectedRowKeys.push(index);
                    selectedItem.push(record);
                } else {
                    selectedIds.splice(i,1);
                    selectedRowKeys.splice(i,1);
                    selectedItem.splice(i,1);
                }
            } else {
                selectedIds = [record.id]
                selectedRowKeys = [index]
                selectedItem = [record]
            }
            this.props.updateSelectedItem(selectedRowKeys, selectedItem, selectedIds)
        } else {
            let selectKey = [index]
            const selectedRowKeys = this.props.selectedRowKeys
            if (selectedRowKeys && selectedRowKeys[0] == index) {
                return
            }
            this.props.updateSelectedItem(selectKey, record || {})
        }
    }

    // 复选框变更
    onSelectChange = (selectedRowKeys, selectedRows) => {
        let rowSelection = this.props.rowSelection
        let selectedIds = []
        if (rowSelection === 'checkbox') {
            selectedRows.map((item) => {
                selectedIds.push(item.id);
            });
        }
        this.props.updateSelectedItem(selectedRowKeys, selectedRows, selectedIds)
    }

    onSelectAll = (selected, selectedRows, changeRows) => {
        let selectedIds = [];
        let selectKey = [];
        selectedRows.forEach((item, i) => {
            selectedIds.push(item.id);
            selectKey.push(i);
        });
        this.props.updateSelectedItem(selectKey, selectedRows, selectedIds);
    }

    getOptions = () => {
        const p = this.props
        const name_list = {
            "订单编号": 170,
            "车辆编号": 80,
            "手机号码": 96,
            "用户姓名": 70,
            "密码": 70,
            "运维区域": 300,
            "车型": 42,
            "故障编号": 76,
            "代理商编码": 97,
            "角色ID": 64
        };
        if (p.columns && p.columns.length > 0) {
            p.columns.forEach(item => {
                if (!item.title) {
                    return
                }
                if (!item.width) {
                    if (item.title.indexOf("时间") > -1 && item.title.indexOf("持续时间") < 0) {
                        item.width = 132
                    } else if (item.title.indexOf("图片") > -1) {
                        item.width = 86
                    } else if (item.title.indexOf("权限") > -1 || item.title.indexOf("负责城市") > -1) {
                        item.width = '40%';
                        item.className = "text-left";
                    } else {
                        if (name_list[item.title]) {
                            item.width = name_list[item.title];
                        }
                    }
                }
                item.align = 'center'
            })
        }
        const {selectedRowKeys} = this.props
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: this.onSelectChange,
            onSelectAll: this.onSelectAll
        }
        let row_selection = this.props.rowSelection
        if (row_selection === false || row_selection === null) {
            row_selection = false
        } else if (row_selection == 'checkbox') {
            // 设置类型为复选框
            rowSelection.type = 'checkbox'
        } else {
            // 默认为单选
            row_selection = 'radio'
            rowSelection.type = 'radio'
        }
        return (
            <Table
                bordered
                {...this.props}
                rowSelection={row_selection ? rowSelection : null}
                onRow={(record, index) => ({
                    onClick: () => {
                        if (!row_selection) {
                            return;
                        }
                        this.onRowClick(record, index)
                    }
                })}
            />
        )
    }

    render() {
        return (
            <div>
                {this.getOptions()}
            </div>
        );
    }
}
