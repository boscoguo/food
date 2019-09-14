import React, { Component } from 'react'
import { Modal, Form, Input, Select } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

class CreateForm extends Component {
    render () {
        const { visible, onCancel, onCreate, form } = this.props
        const { getFieldDecorator } = form
        return (
            <Modal
                visible={visible}
                title="Create Menu"
                okText="Save"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form>
                    <FormItem label="Name">
                        {
                            getFieldDecorator('name', {
                                rules: [ { required: true, message: 'Please enter your name',} ]
                            })(<Input />)
                        }
                    </FormItem>
                    <FormItem label="Type">
                        {
                            getFieldDecorator('type', {
                                rules: [ {required: true, message: 'Please select the type'} ]
                            })(
                                <Select placeholder="Select type">
                                    <Option value="hot">hot</Option>
                                    <Option value="cold">cold</Option>
                                    <Option value="seafood">seafood</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem label="Description">
                        {
                            getFieldDecorator('description', {
                                rules: [ {required: true, message: 'Please enter the name'} ]
                            })(<Input />)
                        }
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

const CreateFormWrap = Form.create()(CreateForm)
export default CreateFormWrap
