import React, { useState, useEffect } from "react";
import { Card, Typography, Space, Row, Col, Divider, Tag } from "antd";
import { useParams } from "react-router-dom";
import { JsonForms } from "@jsonforms/react";
import { vanillaRenderers } from "@jsonforms/vanilla-renderers";

const { Text, Title, Link: AntLink } = Typography;

const tabsData = {
  main: {
    key: "main",
    tab: "VENDOR - MAIN",
    sections: [
      {
        title: "Vendor Information",
        schema: {
          type: "object",
          properties: {
            a01: { type: "string", title: "Name" },
            a02: { type: "string", title: "Vendor" },
            a07: { type: "string", title: "Address" },
            a04: { type: "string", format: "uri", title: "Website" },
            a11: { type: "string", title: "Company Size" },
            a05: { type: "string", title: "Contact Email" },
            a06: { type: "string", title: "Phone Number" },
            a08: { type: "string", title: "Description" },
            a09: { type: "string", title: "Overview" },
            a10: {
              type: "array",
              title: "Keywords",
              items: { type: "string" },
            },
          },
        },
        uiSchema: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/a01" }, // Name
            { type: "Control", scope: "#/properties/a02" }, // Vendor
            { type: "Control", scope: "#/properties/a07" }, // Address
            { type: "Control", scope: "#/properties/a04" }, // Website
            { type: "Control", scope: "#/properties/a11" }, // Company Size
            { type: "Control", scope: "#/properties/a05" }, // Contact Email
            { type: "Control", scope: "#/properties/a06" }, // Phone Number
            { type: "Control", scope: "#/properties/a08" }, // Description
            { type: "Control", scope: "#/properties/a09" }, // Overview
            {
              type: "Control",
              scope: "#/properties/a10", // Keywords
              options: {
                showSortButtons: false, // Supprime les boutons inutiles
                showArrayValidation: false, // Supprime les boutons "Add/Delete"
                detail: {
                  type: "VerticalLayout",
                  elements: [
                    { type: "Label", text: "Keyword List" },
                    { type: "Control", scope: "#/properties/a10/items" },
                  ],
                },
              },
            },
          ],
        },
        data: {
          a01: "Phosforea",
          a02: "Phosforea",
          a07: "209 Rue Jean Bart, 31670 Labège",
          a04: "https://www.phosforea.com/",
          a11: "11-50",
          a05: "contact@phosforea.com",
          a06: "+330561170854",
          a08: "Cyber awareness and compliance management",
          a09:
            "Phosforea, a SaaS publisher of LMS and phishing simulation platforms, supports companies in their cybersecurity awareness and training projects.",
          a10: ["Cybersecurity", "Training", "Awareness"],
        },
      },
    ],
  },

  organization: {
    key: "organization",
    tab: "VENDOR - ORGANIZATION",
    sections: [
      {
        title: "Organization Structure",
        schema: {
          type: "object",
          properties: {
            o01: { type: "string", title: "Legal Structure" },
            o02: { type: "string", title: "Number of Employees" },
            o03: { type: "string", title: "Publicly Traded" },
          },
        },
        uiSchema: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/o01" },
            { type: "Control", scope: "#/properties/o02" },
            { type: "Control", scope: "#/properties/o03" },
          ],
        },
        data: {
          o01: "SAS (Société par Actions Simplifiée)",
          o02: "50-100",
          o03: "No",
        },
      },
      {
        title: "Management",
        schema: {
          type: "object",
          properties: {
            m01: { type: "string", title: "CEO" },
            m02: { type: "string", title: "CTO" },
          },
        },
        uiSchema: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/m01" },
            { type: "Control", scope: "#/properties/m02" },
          ],
        },
        data: {
          m01: "John Doe",
          m02: "Jane Smith",
        },
      },
    ],
  },
};

const Vendors: React.FC = () => {
  const { tab = "main" } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeTabData = tabsData[tab as keyof typeof tabsData];

  return (
    <>
      <div
        style={{
          backgroundColor: "#ffffff",
          paddingLeft: "10px",
          marginLeft: "-80px",
          marginTop: "15px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          borderTopLeftRadius: "14px",
          width: "200%",
        }}
      >
        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          <Col xs={24} md={8}>
            <Card bordered={false} style={{ background: "transparent", boxShadow: "none" }}>
              <Space align="start" style={{ width: "100%" }}>
                <img src="/normation-logo.png" alt="Normation" style={{ width: 40, height: 40 }} />
                <div style={{ flex: 1 }}>
                  <Title level={4} style={{ margin: 0 }}>
                    Normation
                  </Title>
                  <Text type="secondary">Software Company</Text>
                </div>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} style={{ background: "transparent", boxShadow: "none" }}>
              <Space direction="vertical" size="small" style={{ width: "100%" }}>
                <AntLink href="https://www.normation.com" target="_blank">
                  https://www.normation.com
                </AntLink>
                <Text>info@normation.com</Text>
                <Text>+33 1 XX XX XX XX</Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} style={{ background: "transparent", boxShadow: "none" }}>
              <Space size="small" wrap>
                <Tag color="blue">Software</Tag>
                <Tag color="blue">IT Solutions</Tag>
                <Tag color="blue">DevOps</Tag>
              </Space>
            </Card>
          </Col>
        </Row>
        <Divider
          style={{
            borderColor: "#a349a4",
            borderWidth: "2px",
            width: "200%",
            margin: "0",
            marginLeft: "-80px",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          paddingLeft: "10px",
          marginLeft: "-80px",
          marginTop: "15px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          borderTopLeftRadius: "14px",
          width: "200%",
        }}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {activeTabData?.sections.map((section, sectionIndex) => (
            <Card title={section.title} key={sectionIndex}>
              <JsonForms
                schema={section.schema}
                uischema={section.uiSchema}
                data={section.data}
                renderers={vanillaRenderers}
              />
            </Card>
          ))}
        </Space>
      </div>
    </>
  );
};

export default Vendors;
