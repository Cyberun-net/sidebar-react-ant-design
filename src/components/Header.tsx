import React from "react";
import { Layout, Avatar, Dropdown, Space } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "logout") {
      console.log("logout clicked");
    } else if (e.key === "profile") {
      console.log("profile clicked");
    }
  };

  return (
    <AntHeader
      className="custom-header"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        placement="bottomRight"
      >
        <Space style={{ cursor: "pointer" }}>
          <Avatar icon={<UserOutlined />} />
        </Space>
      </Dropdown>
    </AntHeader>
  );
};

export default Header;
