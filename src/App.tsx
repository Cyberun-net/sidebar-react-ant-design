import {
  SafetyOutlined,
  MonitorOutlined,
  TeamOutlined,
  AuditOutlined,
  CodeOutlined,
  AppstoreOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, Button } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { MyRoutes } from "./routes/Routes";

const { Content, Sider } = Layout;

const menuItems: MenuProps["items"] = [
  {
    key: "solution",
    type: "group",
    label: (
      <div
        style={{ display: "flex", alignItems: "center", paddingLeft: "16px" }}
      >
        <SafetyOutlined style={{ marginRight: 8, color: "#6c757d" }} />
        <span style={{ color: "#6c757d", fontWeight: "bold" }}>SOLUTION</span>
      </div>
    ),
    children: [
      {
        key: "main",
        label: (
          <div style={{ paddingLeft: "32px" }}>
            <Link
              to="/solutions/main"
              style={{ fontWeight: "bold", color: "#333" }}
            >
              Main
            </Link>
          </div>
        ),
      },
      {
        key: "security",
        label: (
          <div style={{ paddingLeft: "32px" }}>
            <Link
              to="/solutions/security"
              style={{ fontWeight: "bold", color: "#333" }}
            >
              Security
            </Link>
          </div>
        ),
      },
      {
        key: "datamanagement",
        label: (
          <div style={{ paddingLeft: "32px" }}>
            <Link
              to="/solutions/datamanagement"
              style={{ fontWeight: "bold", color: "#333" }}
            >
              Data Management
            </Link>
          </div>
        ),
      },
    ],
  },
  {
    key: "vendors",
    type: "group",
    label: (
      <div
        style={{ display: "flex", alignItems: "center", paddingLeft: "16px" }}
      >
        <CodeOutlined style={{ marginRight: 8, color: "#6c757d" }} />
        <span style={{ color: "#6c757d", fontWeight: "bold" }}>VENDORS</span>
      </div>
    ),
    children: [
      {
        key: "vendor-main",
        label: (
          <div style={{ paddingLeft: "32px" }}>
            <Link
              to="/vendors/main"
              style={{ fontWeight: "bold", color: "#333" }}
            >
              Main
            </Link>
          </div>
        ),
      },
      {
        key: "vendor-organization",
        label: (
          <div style={{ paddingLeft: "32px" }}>
            <Link
              to="/vendors/organization"
              style={{ fontWeight: "bold", color: "#333" }}
            >
              Organization
            </Link>
          </div>
        ),
      },
    ],
  },
  {
    key: "organization",
    type: "group",
    label: (
      <div
        style={{ display: "flex", alignItems: "center", paddingLeft: "16px" }}
      >
        <TeamOutlined style={{ marginRight: 8, color: "#6c757d" }} />
        <span style={{ color: "#6c757d", fontWeight: "bold" }}>
          ORGANIZATION
        </span>
      </div>
    ),
    children: [
      {
        key: "people",
        label: (
          <div style={{ paddingLeft: "32px" }}>
            <Link to="/people" style={{ fontWeight: "bold", color: "#333" }}>
              People
            </Link>
          </div>
        ),
      },
      {
        key: "devices",
        label: (
          <div style={{ paddingLeft: "32px" }}>
            <Link to="/devices" style={{ fontWeight: "bold", color: "#333" }}>
              Devices
            </Link>
          </div>
        ),
      },
    ],
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <AppstoreOutlined
        style={{ margin: 0, backgroundColor: "#a349a4", height: "4px" }}
      />
      <Layout>
      <Sider
  collapsible
  collapsed={collapsed}
  breakpoint="lg"
  collapsedWidth={isMobile ? 0 : 80}
  trigger={null}
  style={{
    background: "#f5f5f5",
    position: "fixed",
    top: 40,
    height: "calc(100vh - 64px)",
    zIndex: 999,
  }}
>
  <div style={{ padding: "16px", textAlign: "center" }}>
    <img
      src="./logo/image.png"
      alt="Cloudflare"
      style={{ width: collapsed ? "40px" : "80%" , marginTop: '25px'}}
    />
  </div>
  <div
  style={{
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '8px', 
    marginTop: '20px', 
    marginLeft: '20px',
    marginRight:'-18px',
  }}
>
  {/* Icone */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40px', 
      height: '40px',
      marginLeft: '-20px',
      borderRadius: '50%', 
      backgroundColor: '#fff',  
      border: '0.1px solid #6c757d' ,
    }}
  >
<span
  role="img"
  aria-label="icon"
  style={{
    fontSize: '22px', 
    filter: 'grayscale(100%)', 
  }}
>
  🔖
</span>

  </div>

  {/* Bouton */}
  <button
    style={{
      padding: '8px 30px',
      fontSize: '15px',
      fontWeight: 'bold',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '64px',
      cursor: 'pointer',
      
    }}
  >
    Get in touch
  </button>
</div>

  <Menu theme="light" mode="inline" items={menuItems} />
</Sider>
<div>
  <Layout
    style={{
      marginLeft: collapsed ? (isMobile ? 0 : 120) : 250,
      transition: "margin-left 0.2s",
    }}
  >
    <Content
      style={{
        margin: "14px",
        marginRight: 0,
        marginTop: "55px",
        borderTopLeftRadius: "14px",
        padding: "24px",
        background: "#f5f5f5",
        minHeight: 280,
      }}
    >
      <MyRoutes />
    </Content>
  </Layout>
</div>
      </Layout>
    </Layout>
  );
};

export default App;
