import { Avatar, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import openNotification from '../../../components/openNotification';
import './style.scss';

export default function LoginPage() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Basit giriş kontrolü
    if (values.username === 'admin' && values.password === 'admin') {
      navigate('/');
      openNotification('success', 'Giriş Başarılı');
    } else {
      openNotification('error', 'Giriş Başarısız');
    }
  };

  return (
    <>
      <div className="bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="card-container">
        <Form className="login_form" name="login_form" onFinish={onFinish}>
          <div className="login_form-div">
            <Avatar size={64} src="./assets/img/teklif-m.png" />
          </div>
          <Form.Item name="username">
            <Input placeholder="Kullanıcı Adı" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password placeholder="Şifre" />
          </Form.Item>
          <button htmlType="submit" className="submit-button">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
}
