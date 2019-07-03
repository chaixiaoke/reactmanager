import React from 'react'
import {Form, Button, Select, Input, Radio, Checkbox, DatePicker} from "antd";
import Utils from '../../utils/utils'
import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option

class FilterForm extends React.Component {

    initFormList = () => {
        const {getFieldDecorator} = this.props.form
        const formList = this.props.formList
        const formItemList = []
        if (formList && formList.length > 0) {
            formList.forEach((item) => {
                let label = item.label
                let field = item.field
                let initialValue = item.initialValue || ''
                let placeholder = item.placeholder
                let width = item.width
                if (item.type === '时间查询') {
                    const begin_time = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator('start_time')(
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    placeholder={placeholder}
                                />
                            )
                        }
                    </FormItem>
                    formItemList.push(begin_time)
                    const end_time = <FormItem label='~' colon={false} key={field + '2'}>
                        {
                            getFieldDecorator('end_time')(
                                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder={placeholder}/>
                            )
                        }
                    </FormItem>
                    formItemList.push(end_time)
                } else if (item.type === 'INPUT') {
                    const INPUT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator(field, {
                                initialValue: initialValue
                            })(
                                <Input type="text" placeholder={placeholder}/>
                            )
                        }
                    </FormItem>
                    formItemList.push(INPUT)
                } else if (item.type === 'SELECT') {
                    const SELECT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator(field, {
                                initialValue: initialValue
                            })(
                                <Select
                                    style={{width: width}}
                                    placeholder={placeholder}
                                >
                                    {Utils.getOptionList(item.list)}
                                </Select>
                            )
                        }
                    </FormItem>
                    formItemList.push(SELECT)
                } else if (item.type === 'CHECKBOX') {
                    const CHECKBOX = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator(field, {
                                valuePropName: 'checked',
                                initialValue: initialValue // true | false
                            })(
                                <Checkbox>
                                    {label}
                                </Checkbox>
                            )
                        }
                    </FormItem>
                    formItemList.push(CHECKBOX)
                } else if (item.type === 'DATEPICKER') {
                    const DATEPICKER = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator(field)(
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    placeholder={placeholder}
                                />
                            )
                        }
                    </FormItem>
                    formItemList.push(DATEPICKER)
                }
            })
        }
        return formItemList
    }

    handleFilterSubmit = () => {
        let fieldsValue = this.props.form.getFieldsValue()
        this.props.filterSubmit(fieldsValue)
    }

    handleReset = () => {
        this.props.form.resetFields()
    }

    render() {
        return (
            <Form layout="inline">
                {this.initFormList()}
                <FormItem>
                    <Button type="primary" style={{margin: '0 20px'}} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.handleReset}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({})(FilterForm)
