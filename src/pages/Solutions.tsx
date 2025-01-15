import React, { useState, useEffect } from "react";
import { Card, Typography, Space, Row, Col, Divider, Tag } from "antd";
import { useParams } from "react-router-dom";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";
import { vanillaRenderers } from "@jsonforms/vanilla-renderers"; // Ajout des vanilla renderers

const { Title, Text, Link: AntLink } = Typography;

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
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Name" },
                { type: "Control", scope: "#/properties/a01" },
              ],
            },
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Vendor" },
                { type: "Control", scope: "#/properties/a02" },
              ],
            },
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Address" },
                { type: "Control", scope: "#/properties/a07" },
              ],
            },
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Website" },
                { type: "Control", scope: "#/properties/a04" },
              ],
            },
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Company Size" },
                { type: "Control", scope: "#/properties/a11" },
              ],
            },
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Contact Email" },
                { type: "Control", scope: "#/properties/a05" },
              ],
            },
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Phone Number" },
                { type: "Control", scope: "#/properties/a06" },
              ],
            },
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Description" },
                { type: "Control", scope: "#/properties/a08" },
              ],
            },
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Overview" },
                { type: "Control", scope: "#/properties/a09" },
              ],
            },
            {
              type: "HorizontalLayout",
              elements: [
                { type: "Label", text: "Keywords" },
                { type: "Control", scope: "#/properties/a10" },
              ],
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
  security: {
    key: "security",
    tab: "SOLUTION - SECURITY",
    sections: [
      {
        title: "Security Information",
        schema: {
          title: "Security Information",
          type: "object",
          properties: {
            p01: { type: "string", title: "Compliance" },
            p07: { type: "string", title: "Risk Level" },
            p08: {
              type: "array",
              title: "Countries",
              items: { type: "string" },
            },
          },
        },
        uiSchema: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/p01" },
            { type: "Control", scope: "#/properties/p07" },
            { type: "Control", scope: "#/properties/p08" },
          ],
        },
        data: {
          p01: "ISO 27001 Certified",
          p07: "Low",
          p08: ["France", "Germany"],
        },
      },
    ],
  },
  datamanagement: {
    key: "data-management",
    tab: "SOLUTION - DATA MANAGEMENT",
    sections: [
      {
        title: "Data Management Information",
        schema: {
          title: "Data Management Information",
          type: "object",
          properties: {
            d01: { type: "string", title: "Is data collected?" },
            d02: { type: "string", title: "Data Retention Policy" },
            d05: {
              type: "array",
              title: "Countries where data is stored",
              items: { type: "string" },
            },
          },
        },
        uiSchema: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/d01" },
            { type: "Control", scope: "#/properties/d02" },
            { type: "Control", scope: "#/properties/d05" },
          ],
        },
        data: {
          d01: "yes",
          d02: "Etant RGPD compliance nous nous référons à ce document",
          d05: ["France", "UK"],
        },
      },
      {
        title: "Risk Information",
        schema: {
          title: "Dependance Risk",
          type: "object",
          properties: {
            r04: { type: "string", title: "Risk Assessment Completed?" },
            r05: { type: "string", title: "Audit Methodology" },
            r13: { type: "string", title: "Audit Frequency" },
            r14: { type: "string", title: "Pentest Policy" },
          },
        },
        uiSchema: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/r04" },
            { type: "Control", scope: "#/properties/r05" },
            { type: "Control", scope: "#/properties/r13" },
            { type: "Control", scope: "#/properties/r14" },
          ],
        },
        data: {
          r04: "yes",
          r05: "on demand audit",
          r13: "monthly (or more)",
          r14: "regular pentest",
        },
      },
    ],
  },
};
const Solutions: React.FC = () => {
  const { tab = "main" } = useParams<{ tab: string }>();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeTabData = tabsData[tab as keyof typeof tabsData];

  if (!activeTabData) {
    return (
      <div style={{ padding: "24px", textAlign: "center" }}>
        <Title level={4}>No data available for this tab.</Title>
      </div>
    );
  }

  return (
    <>
      {/* HEADER SECTION */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          marginTop: "-13px",
          marginLeft: "-80px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          borderTopLeftRadius: "14px",
          width: "200%",
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

      {/* DIVIDER */}
      <Divider
        style={{
          borderColor: "#a349a4",
          borderWidth: "2px",
          width: "200%",
          margin: "0",
          marginLeft: "-80px",
        }}
      />

      {/* CONTENT SECTION */}
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
        <Space direction="vertical" size="large" style={{ width: "200%" }}>
          {activeTabData.sections.map((section, sectionIndex) => (
            <Card title={section.title} key={sectionIndex}>
              <JsonForms
                schema={section.schema}
                uischema={section.uiSchema}
                data={section.data}
                renderers={materialRenderers}
                onChange={({ data }) =>
                  console.log(`Form updated:`, JSON.stringify(data, null, 2))
                }
              />
            </Card>
          ))}
        </Space>
      </div>
    </>
  );
};

// Exportation au niveau supérieur
export default Solutions;
