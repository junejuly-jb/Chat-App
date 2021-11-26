import React, { useState } from 'react'
import './Register.css'

// redux
import { useDispatch } from 'react-redux'

// reducers
import { addUser } from '../features/messageSlice';

// ant
import { Input, Form, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Register = () => {

     const [form] = Form.useForm();
     const [username, setUsername] = useState('')
     const dispatch = useDispatch()

     const onFinish = () => {
          dispatch(addUser(username))
     }
     
     return (
          <div className="container">
               <div className="register__container">
                    <div className="form__container">
                         <Form
                              layout="vertical"
                              form={form}
                              onFinish={onFinish}
                         >
                              <Form.Item
                                   name="username"
                                   label="What's your name?"
                                   rules={[
                                        { required: true }
                                   ]}
                              >
                                   <Input
                                        allowClear="true"
                                        size="large"
                                        placeholder="large size"
                                        prefix={<UserOutlined />}
                                        value={username}
                                        onChange={ (e) => setUsername(e.target.value)}
                                   />
                              </Form.Item>
                              <Form.Item>
                                   <Space>
                                        <Button type="primary" htmlType="submit">
                                             Submit
                                        </Button>
                                   </Space>
                              </Form.Item>
                         </Form>
                    </div>
               </div>
          </div>
     )
}

export default Register
