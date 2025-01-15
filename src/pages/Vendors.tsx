import React, { useState, useEffect } from "react";
import { Card, Typography, Space, Row, Col, Divider, Tag } from "antd";
import { useParams } from "react-router-dom";
import { JsonForms } from "@jsonforms/react";
import CustomHorizontalRenderer, {
  customHorizontalRendererTester,
} from "../components/CustomHorizontalRenderer";

import { vanillaRenderers } from "@jsonforms/vanilla-renderers";

const renderers = [
  ...vanillaRenderers,
  {
    tester: customHorizontalRendererTester,
    renderer: CustomHorizontalRenderer,
  },
];
const { Text, Title, Link: AntLink } = Typography;

const tabsData = {
  main: {
    key: "main",
    tab: "VENDOR - MAIN",
    sections: [
      {
        title: "Vendor Details",
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
            { type: "Control", scope: "#/properties/a01" },
            { type: "Control", scope: "#/properties/a02" },
            { type: "Control", scope: "#/properties/a07" },
            { type: "Control", scope: "#/properties/a04" },
            { type: "Control", scope: "#/properties/a11" },
            { type: "Control", scope: "#/properties/a05" },
            { type: "Control", scope: "#/properties/a06" },
            { type: "Control", scope: "#/properties/a08" },
            { type: "Control", scope: "#/properties/a09" },
            {
              type: "Control",
              scope: "#/properties/a10",
              options: {
                detail: {
                  type: "VerticalLayout",
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
          a09: "Phosforea, a SaaS publisher of LMS and phishing simulation",
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
        title: "Influence and Control",
        schema: {
          type: "object",
          properties: {
            i01: {
              type: "array",
              title: "Countries of Influence",
              items: {
                type: "object",
                properties: {
                  country: { type: "string", title: "Country" },
                  percent: { type: "number", title: "Percent" },
                },
              },
            },
            i02: {
              type: "array",
              title: "Operational Countries",
              items: { type: "string" },
            },
            i03: { type: "string", title: "Average Time to Market" },
            c01: { type: "string", title: "Control Country" },
            c02: { type: "string", title: "Control Region" },
            c03: { type: "string", title: "Control Certification" },
          },
        },
        uiSchema: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/i01" },
            { type: "Control", scope: "#/properties/i02" },
            { type: "Control", scope: "#/properties/i03" },
            { type: "Control", scope: "#/properties/c01" },
            { type: "Control", scope: "#/properties/c02" },
            { type: "Control", scope: "#/properties/c03" },
          ],
        },
        data: {
          i01: [{ country: "France", percent: 100 }],
          i02: ["France"],
          i03: "<1 month",
          c01: "France",
          c02: "Occitanie",
          c03: "?unknown",
        },
      },
      {
        title: "Certifications and Markets",
        schema: {
          type: "object",
          properties: {
            t01: { type: "string", title: "Certification 1" },
            t03: { type: "string", title: "Certification 2" },
            t06: { type: "string", title: "Certification 3" },
            t07: { type: "string", title: "Certification 4" },
            m01: {
              type: "array",
              title: "Markets",
              items: { type: "string" },
            },
            m02: {
              type: "array",
              title: "Regions of Operation",
              items: { type: "string" },
            },
          },
        },
        uiSchema: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/t01" },
            { type: "Control", scope: "#/properties/t03" },
            { type: "Control", scope: "#/properties/t06" },
            { type: "Control", scope: "#/properties/t07" },
            { type: "Control", scope: "#/properties/m01" },
            { type: "Control", scope: "#/properties/m02" },
          ],
        },
        data: {
          t01: "?unknown",
          t03: "?unknown",
          t06: "?unknown",
          t07: "?unknown",
          m01: [
            "agriculture, forestry and fishing",
            "mining and quarrying",
            "manufacturing",
            "electricity, gas",
          ],
          m02: ["Europe"],
        },
      },
      {
        title: "Environmental Impact",
        schema: {
          type: "object",
          properties: {
            e01: { type: "string", title: "Environmental Certification" },
            e02: { type: "string", title: "Sustainability Initiatives" },
          },
        },
        uiSchema: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/e01" },
            { type: "Control", scope: "#/properties/e02" },
          ],
        },
        data: {
          e01: "?unknown",
          e02: "?unknown",
        },
      },
    ],
  },
};

const Vendors: React.FC = () => {
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
    <div>
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "#ffffff",
          paddingLeft: "10px",
          marginLeft: "-80px",
          marginTop: "-15px",
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
                  src="/normation-logo.png"
                  alt="Normation"
                  style={{ width: 40, height: 40 }}
                />
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
            <Card
              bordered={false}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                <AntLink href="https://www.normation.com" target="_blank">
                  https://www.normation.com
                </AntLink>
                <Text>info@normation.com</Text>
                <Text>+33 1 XX XX XX XX</Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              style={{ background: "transparent", boxShadow: "none" }}
            >
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

      {/* Main Content Section */}
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
          {activeTabData.sections.map((section, sectionIndex) => (
            <Card title={section.title} key={sectionIndex}>
              <JsonForms
                schema={section.schema}
                uischema={section.uiSchema}
                data={section.data}
                renderers={renderers}
              />
            </Card>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default Vendors;
