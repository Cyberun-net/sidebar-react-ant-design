import { 
  SafetyOutlined,
  MonitorOutlined,
  TeamOutlined,
  AuditOutlined,
  CodeOutlined,
  AppstoreOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { Layout, Menu,  MenuProps } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link,  } from "react-router-dom";
import Header from './components/Header';

const {  Content, Sider } = Layout;


import './App.css';
import { MyRoutes } from './routes/Routes';

const menuItems: MenuProps['items'] = [
  {
    key: 'solution',
    type: 'group',
    label: (
      <>
        <SafetyOutlined style={{ marginRight: 8 }} />
        SOLUTION
      </>
    ),
    children: [
      {
        key: 'main',
        label: <Link to="/solutions/main">MAIN</Link>,
      },
      {
        key: 'security',
        label: <Link to="/solutions/security">SECURITY</Link>,
      },
      {
        key: 'datamanagement',
        label: <Link to="/solutions/datamanagement">DATA MANAGEMENT</Link>,
      },
    ],
  },
  {
    key: 'vendors',
    type: 'group',
    label: (
      <>
        <CodeOutlined style={{ marginRight: 8 }} />
        VENDORS
      </>
    ),
    children: [
      {
        key: 'vendor-main',
        label: <Link to="/vendors/main">MAIN</Link>,
      },
      {
        key: 'vendor-organization',
        label: <Link to="/vendors/organization">ORGANIZATION</Link>,
      },
    ],
  },
  {
    key: 'organization',
    type: 'group',
    label: (
      <>
        <TeamOutlined style={{ marginRight: 8 }} />
        ORGANIZATION
      </>
    ),
    children: [
      {
        key: 'people',
        label: <Link to="/people">People</Link>,
      },
      {
        key: 'devices',
        label: <Link to="/devices">Devices</Link>,
      },
    ],
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [siderVisible, setSiderVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSider = () => {
    if (isMobile) {
      setSiderVisible(!siderVisible);
      setCollapsed(false);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible={!isMobile}
        collapsed={collapsed}
        onCollapse={toggleSider}
        breakpoint="lg"
        collapsedWidth={isMobile ? 0 : 80}
        trigger={null}
        style={{
          position: isMobile ? 'fixed' : 'relative',
          height: '100vh',
          left: isMobile && !siderVisible ? -200 : 0,
          zIndex: 1000,
          transition: 'all 0.2s',
        }}
      >
        <div style={{ padding: '16px', textAlign: 'center' }}>
          <img 
            src="/cloudflare-logo.png" 
            alt="Cloudflare" 
            style={{ width: collapsed && !isMobile ? '40px' : '80%' }} 
          />
        </div>
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout style={{ 
        marginLeft: isMobile ? 0 : (collapsed ? 50 : 80),
        transition: 'margin 0.2s'
      }}>
        <Header />
        {isMobile && (
          <div 
            style={{ 
              padding: '16px',
              position: 'fixed',
              top: 0,
              left: siderVisible ? 200 : 0,
              zIndex: 1001,
              transition: 'left 0.2s',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}
          >
            <MenuOutlined 
              onClick={toggleSider}
              style={{ fontSize: '20px', cursor: 'pointer' }}
            />
          </div>
        )}
        <Content style={{ 
          margin: isMobile ? '48px 8px 16px' : '22px 0px 22px', 
          marginRight: 10, 
          padding: isMobile ? 10 : 20, 
          background: '#fff', 
          minHeight: 280,
        }}>
            <MyRoutes/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;


