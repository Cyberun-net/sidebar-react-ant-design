import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, Space } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'logout') {
      // Handle logout
      console.log('logout clicked');
    } else if (e.key === 'profile') {
      // Handle profile
      console.log('profile clicked');
    }
  };

  return (
    <AntHeader style={{ 
      background: '#fff', 
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
      height: 50,
    }}>
      <Dropdown menu={{ items, onClick: handleMenuClick }} placement="bottomRight">
        <Space style={{ cursor: 'pointer' }}>
          <Avatar icon={<UserOutlined />} />
        </Space>
      </Dropdown>
    </AntHeader>
  );
};

export default Header; 