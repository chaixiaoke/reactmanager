import React from 'react'
import {Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, InputNumber, message} from "antd";
import moment from 'moment'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea

class FormRegister extends React.Component {

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue()
        console.log(userInfo)
        message.success(`${userInfo.userName}恭喜你`)
    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    state = {}

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false,
            }));
        }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 10
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        const rowsObj = {
            minRows: 3,
            maxRows: 10
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 5,
                                            max: 10,
                                            message: '长度不在范围内'
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: '用户名必须为数字和字母'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem label='密码' {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                })(
                                    <Input prefix={<Icon type="lock"/>} placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem label='性别' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label='年龄' {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18,
                                })(
                                    <InputNumber/>
                                )
                            }
                        </FormItem>
                        <FormItem label='当前状态' {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '2',
                                })(
                                    <Select>
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">风华浪子</Option>
                                        <Option value="3">北大才子一枚</Option>
                                        <Option value="4">百度FE</Option>
                                        <Option value="5">创业者</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='爱好' {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['2','4'],
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">学习</Option>
                                        <Option value="2">打游戏</Option>
                                        <Option value="3">健身</Option>
                                        <Option value="4">麦霸</Option>
                                        <Option value="5">爬山</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2019-05-10 18:00:00'),
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue: '北京市海淀区奥林匹克公园'
                                })(
                                    <TextArea
                                        autosize={rowsObj}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg ? <img alt='' src={this.state.userImg}/> : <Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('protocl')(
                                    <Checkbox>我已阅读<a href='#'>协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormRegister)
