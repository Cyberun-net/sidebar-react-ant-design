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
      <>
        <SafetyOutlined style={{ marginRight: 8 }} />
        SOLUTION
      </>
    ),
    children: [
      {
        key: "main",
        label: (
          <Link
            to="/solutions/main"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Main
          </Link>
        ),
      },
      {
        key: "security",
        label: (
          <Link
            to="/solutions/security"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Security
          </Link>
        ),
      },
      {
        key: "datamanagement",
        label: (
          <Link
            to="/solutions/datamanagement"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Data Management
          </Link>
        ),
      },
    ],
  },
  {
    key: "vendors",
    type: "group",
    label: (
      <>
        <CodeOutlined style={{ marginRight: 8 }} />
        VENDORS
      </>
    ),
    children: [
      {
        key: "vendor-main",
        label: (
          <Link
            to="/vendors/main"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Main
          </Link>
        ),
      },
      {
        key: "vendor-organization",
        label: (
          <Link
            to="/vendors/organization"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Organization
          </Link>
        ),
      },
    ],
  },
  {
    key: "organization",
    type: "group",
    label: (
      <>
        <TeamOutlined style={{ marginRight: 8 }} />
        ORGANIZATION
      </>
    ),
    children: [
      {
        key: "people",
        label: (
          <Link to="/people" style={{ fontWeight: "bold", color: "#333" }}>
            People
          </Link>
        ),
      },
      {
        key: "devices",
        label: (
          <Link to="/devices" style={{ fontWeight: "bold", color: "#333" }}>
            Devices
          </Link>
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
            top: 120,
            height: "calc(100vh - 64px)",
            zIndex: 999,
          }}
        >
          <div style={{ padding: "16px", textAlign: "center" }}>
            <img
              src="/cloudflare-logo.png"
              alt="Cloudflare"
              style={{ width: collapsed ? "40px" : "80%" }}
            />
          </div>
          <Menu theme="light" mode="inline" items={menuItems} />
        </Sider>
        <Layout
          style={{
            marginLeft: collapsed ? (isMobile ? 0 : 80) : 200,
            transition: "margin-left 0.2s",
          }}
        >
          <Content
            style={{
              margin: "14px",
              marginTop: "70px",
              borderTopLeftRadius: "14px",
              padding: "24px",
              background: "#fff",
              minHeight: 280,
              boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <MyRoutes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
