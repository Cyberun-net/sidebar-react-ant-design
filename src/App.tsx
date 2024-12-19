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

const {  Content, Sider } = Layout;


import './App.css';
import { MyRoutes } from './routes/Routes';

const menuItems: MenuProps['items'] = [
  {
    key: 'solution',
    type: 'group',
    label: 'SOLUTION',
    children: [
      {
        key: 'frameworks',
        icon: <SafetyOutlined />,
        label: <Link to="/solutions">Solution</Link>,
      },
      {
        key: 'controls',
        icon: <AuditOutlined />,
        label: <Link to="/controls">Controls</Link>,
      },
      {
        key: 'monitors',
        icon: <MonitorOutlined />,
        label: <Link to="/monitors">Monitors</Link>,
      },
    ],
  },
  {
    key: 'vendors',
    type: 'group',
    label: 'VENDORS',
    children: [
      {
        key: 'attack-surface',
        icon: <CodeOutlined />,
        label: <Link to="/vendors">Attack surface</Link>,
      },
      {
        key: 'code-security',
        icon: <SafetyOutlined />,
        label: <Link to="/code-security">Code security</Link>,
      },
    ],
  },
  {
    key: 'organization',
    type: 'group',
    label: 'ORGANIZATION',
    children: [
      {
        key: 'people',
        icon: <TeamOutlined />,
        label: <Link to="/people">People</Link>,
      },
      {
        key: 'devices',
        icon: <AppstoreOutlined />,
        label: <Link to="/devices">Devices</Link>,
      },
    ],
  },
] ;

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
          margin: isMobile ? '48px 8px 16px' : '24px 16px', 
          padding: isMobile ? 16 : 24, 
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


