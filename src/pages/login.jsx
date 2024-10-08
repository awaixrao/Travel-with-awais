import React, { useEffect } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';  // Add Alert component for errors
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userLoginSlice';

const { Title } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (user) {
      navigate("/");  // Redirect to home if logged in
    }
  }, [user, navigate]);

  const onFinish = (values) => {
    dispatch(loginUser(values));  
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/1031008/pexels-photo-1031008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        filter: 'brightness(0.8)' 
      }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 opacity-95 z-10">
        <Title level={2} className="text-center text-gray-800 mb-6">Login</Title>

        {/* Display error message if login failed */}
        {error && (
          <Alert 
            message="Login Failed"
            description={typeof error === 'string' ? error : error.message || 'An unknown error occurred'}  // Ensure error is a string
            type="error"
            showIcon
            className="mb-4"
          />
        )}

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input 
              placeholder="email" 
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
              loading={loading}  // Show loading spinner during login
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
