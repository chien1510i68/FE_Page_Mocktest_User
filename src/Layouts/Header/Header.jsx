import React from "react";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

function HeaderEtest(props) {
  const navigate = useNavigate();
  const items = [
    {
      icon: <UserOutlined />,
      label: "Hồ sơ",
      key: "1",
    },
    {
      icon: <LogoutOutlined />,
      label: "Đăng xuất",
      key: "2",
      onClick: () => {
        navigate("/");
      },
    },
  ];
  return (
    <div className="flex justify-between ">
      <h1 className="font-sans text-xl font-medium pt-2 ">Xin chào Admin 👋🏼</h1>
      <div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Space>
            <Avatar
              style={{ backgroundColor: "#1677FF" }}
              icon={<UserOutlined />}
            />
            Admin
          </Space>
        </Dropdown>
      </div>
    </div>
  );
}

export default HeaderEtest;
