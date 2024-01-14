
import React, { useState } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';
import { useNavigate } from 'react-router-dom'; 

const { Title } = Typography;

const Login = ({ credentials }) => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (values) => {
    const { username, password } = values;

    if (username === credentials.username && password === credentials.password) {
      navigate('/dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <Title level={2}>Login Gateway</Title>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      {errorMessage && <Alert message={errorMessage} type="error" style={{ marginTop: '10px' }} />}
    </div>
  );
};

export default Login;
