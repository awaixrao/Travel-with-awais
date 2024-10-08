// src/SignUp.js
import React, { useEffect } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/registerUserSlice';

const { Title } = Typography;

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.registerUser);

  useEffect(() => {
    if (user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const onFinish = (values) => {
    if (values.password !== values.confirmPassword) {
      return alert("Passwords do not match!");
    }

    dispatch(registerUser(values));
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
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 opacity-95">
        <Title level={2} className="text-center text-gray-800 mb-6">Sign Up</Title>
        
        {error && <p className="text-red-600">{error}</p>} {/* Display error message */}

        <Form
          name="signup"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input 
              placeholder="Name" 
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400 transition duration-200 p-3"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input 
              placeholder="Email" 
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

          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <Input.Password 
              placeholder="Confirm Password" 
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400 transition duration-200 p-3"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg p-3 text-lg font-semibold"
              loading={loading} // Show loading spinner if the request is in progress
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
