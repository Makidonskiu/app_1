import React, { useState } from "react"
import { Form, Input, Button, Checkbox, Radio } from 'antd';

const Register = () => {
    const [value, setValue] = useState(1)
    const onChange = e => {
        setValue(e.target.value)
    }
    return(
        <Form name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off">
        
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Введите текст' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Radio.Group onChange={onChange} value={value} >
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </Radio.Group>
            </Form.Item>   

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                        Кнопка
                </Button>
            </Form.Item>
        </Form>    
    )
}

export default Register