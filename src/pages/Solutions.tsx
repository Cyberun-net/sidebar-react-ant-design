import React, { useState, useEffect } from "react";
import { Card, Typography, Space, Row, Col, Tag, Divider } from "antd";
import { useParams } from "react-router-dom";

const { Title, Text, Link: AntLink } = Typography;

// Data structure for tabs content
const tabsData = {
  main: {
    key: "main",
    tab: "SOLUTION - MAIN",
    sections: [
      {
        title: "Solution",
        questions: [
          { question: "What is the name of the solution ?", answer: "Rudder" },
          {
            question: "What is the name of the vendor providing the solution ?",
            answer: "Normation SAS",
          },
          {
            question: "What is the website url of the Solution ?",
            answer: "https://www.rudder.io/",
          },
          {
            question: "What is the email of the commercial contact ?",
            answer: "contact@rudder.io",
          },
        ],
      },
    ],
  },
  security: {
    key: "security",
    tab: "SOLUTION - SECURITY",
    sections: [
      {
        title: "Security Policy",
        questions: [
          {
            question:
              "Does the supplier have a Product Security Policy for this solution ?",
            answer: "",
          },
          { question: "If yes, can the supplier provide it ?", answer: "" },
          {
            question:
              "If yes, does this policy include a Product Security Risks Assessment (and risks treatment) ?",
            answer: "",
          },
          {
            question:
              "If yes, does this policy include a Product Security vulnerabilities management process ?",
            answer: "",
          },
        ],
      },
    ],
  },
  datamanagement: {
    key: "data-management",
    tab: "SOLUTION - DATA MANAGEMENT",
    sections: [
      {
        title: "Data Collection",
        questions: [
          {
            question:
              "The supplier/provider can prove it does not unnecessarily capture customer's data",
            answer: "",
          },
          {
            question:
              "if yes, Please precise how you are willing to document this",
            answer:
              "offline and on-premise solution without any connection to vendor's systems, customers for support service collect email and phone during their contract, all are documented regarding GDPR",
          },
          {
            question:
              "If data collection is needed, is it transparent to customers ?",
            answer: "",
          },
        ],
      },
    ],
  },
};

const Solutions: React.FC = () => {
  const { tab = "main" } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeTabData = tabsData[tab as keyof typeof tabsData];
  const content = activeTabData ? (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {activeTabData.sections.map((section, sectionIndex) => (
        <Card title={section.title} key={sectionIndex}>
          <Row gutter={[16, 16]}>
            {section.questions.map((item, index) => (
              <Col span={24} key={index}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <Text strong>{item.question}</Text>
                  </Col>
                  <Col xs={24} md={12}>
                    <Text>{item.answer}</Text>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Card>
      ))}
    </Space>
  ) : null;

  return (
    <>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          marginTop: "-13px",
          marginLeft: "-80px",
          marginRight: "none",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          borderTopLeftRadius: "14px",
          width: "115%",
        }}
      >
        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <Space align="start" style={{ width: "100%" }}>
                <img
                  src="/rudder-logo.png"
                  alt="Rudder"
                  style={{ width: 40, height: 40 }}
                />
                <div style={{ flex: 1 }}>
                  <Title level={4} style={{ margin: 0 }}>
                    Rudder
                  </Title>
                  <Text type="secondary">Normation SAS</Text>
                </div>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                <AntLink href="https://www.rudder.io/" target="_blank">
                  https://www.rudder.io/
                </AntLink>
                <Text>contact@rudder.io</Text>
                <Text>33 1 83 62 26 96</Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <Space size="small" wrap>
                <Tag color="blue">Compliance</Tag>
                <Tag color="blue">Server protection</Tag>
                <Tag color="blue">Hardening</Tag>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>

      <Divider
        style={{
          borderColor: "#a349a4",
          borderWidth: "2px",
          width: "115%",
          margin: "0",
          marginLeft: "-80px",
        }}
      />

      <div
        style={{
          backgroundColor: "#ffffff",
          paddingLeft: "10px",
          marginLeft: "-80px",
          marginTop: "15px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          borderTopLeftRadius: "14px",
          width: "110%",
        }}
      >
        {content}
      </div>
    </>
  );
};

export default Solutions;
