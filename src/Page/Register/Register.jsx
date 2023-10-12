import React from "react";
import { Button, Form, Input } from "antd";
import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../Login/login.css";

function Register(props) {
  const navigate = useNavigate();
  return (
    <div className="relative flex">
      <div className="p-21.6 w-1/2 bg-orange-300 border border-solid border-transparent"></div>
      <Form className="login_form">
        <h1 className="text-35 mb-10">Đăng ký</h1>
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              message: "Tên đăng ký phải có ít nhất 6, nhiều nhất 100 kí tự",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Tên đăng nhập"
            className="input"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "E-mail không hợp lệ",
            },
            {
              required: true,
              message: "Vui lòng nhập E-mail của bạn",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="E-mail"
            className="input"
          />
        </Form.Item>
        <Form.Item name="phoneNumber">
          <Input
            prefix={<PhoneOutlined />}
            placeholder="Số điện thoại"
            className="input"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className=" button">
            Đăng ký
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="link"
            onClick={() => {
              navigate("/");
            }}
            className="register"
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
