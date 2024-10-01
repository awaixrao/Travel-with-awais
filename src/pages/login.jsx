// src/Login.js
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate

  const onFinish = (values) => {
    console.log('Success:', values);
    navigate('/'); // Redirect to home page on successful login
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/1031008/pexels-photo-1031008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        filter: 'brightness(0.8)' // Dim the background image slightly for contrast
      }}
    >
      {/* Mobile Background Image Handling */}
      <div className="hidden md:block absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1031008/pexels-photo-1031008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            filter: 'brightness(0.8)',
          }}
        ></div>
      </div>
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 opacity-95 z-10">
        <Title level={2} className="text-center text-gray-800 mb-6">Login</Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input 
              placeholder="Username" 
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400 transition duration-200 p-3"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              placeholder="Password" 
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400 transition duration-200 p-3"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg p-3 text-lg font-semibold"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
