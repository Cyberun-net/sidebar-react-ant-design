import React, { useState, useEffect } from "react";
import { Card, Typography, Space, Row, Col, Divider, Tag } from "antd";
import { useParams } from "react-router-dom";
import { JsonForms } from "@jsonforms/react";
import CustomHorizontalRenderer, {
  customHorizontalRendererTester,
} from "../components/CustomHorizontalRenderer";

import { vanillaRenderers } from "@jsonforms/vanilla-renderers";
import VanillaReadOnly, {
  vanillaReadOnlyTester,
} from "../components/VanillaReadOnly";
import LeftRightDisplay, {
  leftRightTester,
} from "../components/LeftRightDisplay";
import TopBottomDisplay, {
  topBottomTester,
} from "../components/TopBottomDisplay";

const renderers = [
  ...vanillaRenderers,
  {
    tester: vanillaReadOnlyTester,
    renderer: VanillaReadOnly,
  },
  {
    tester: customHorizontalRendererTester,
    renderer: CustomHorizontalRenderer,
  },
  {
    tester: leftRightTester,
    renderer: LeftRightDisplay,
  },
  {
    tester: topBottomTester,
    renderer: TopBottomDisplay,
  },
];

const { Title, Text, Link: AntLink } = Typography;

const tabsData = {
    main: {
      key: "main",
      tab: "SOLUTION - MAIN",
      sections: [
        {
          title: "Vendor Information",
          schema: {
            type: "object",
            properties: {
              a01: { type: "string", title: "Name", readOnly: true },
              a02: { type: "string", title: "Vendor", readOnly: true },
              a07: { type: "string", title: "Address", readOnly: true },
              a04: {
                type: "string",
                format: "uri",
                title: "Website",
                readOnly: true,
              },
              a11: { type: "string", title: "Company Size", readOnly: true },
              a05: { type: "string", title: "Contact Email", readOnly: true },
              a06: { type: "string", title: "Phone Number", readOnly: true },
              a08: { type: "string", title: "Description", readOnly: true },
              a09: { type: "string", title: "Overview", readOnly: true },
              a10: {
                type: "array",
                title: "Keywords",
                items: { type: "string", readOnly: true },
              },
            },
          },
          uiSchema: {
            type: "VerticalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/a01",
              },
              {
                type: "Control",
                scope: "#/properties/a02",
              },
              {
                type: "Control",
                scope: "#/properties/a07",
              },
              {
                type: "Control",
                scope: "#/properties/a04",
              },
              {
                type: "Control",
                scope: "#/properties/a11",
              },
              {
                type: "Control",
                scope: "#/properties/a05",
              },
              {
                type: "Control",
                scope: "#/properties/a06",
              },
              {
                type: "Control",
                scope: "#/properties/a08",
              },
              {
                type: "Control",
                scope: "#/properties/a09",
              },
              {
                type: "Control",
                scope: "#/properties/a10",
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
            a09: "Phosforea, a SaaS publisher of LMS and phishing simulation platforms, supports companies in their cybersecurity awareness and training projects. As a creator of e-learning content specialising in cybersecurity, our teams of teaching engineers and IS engineers have designed turnkey awareness-raising programmes and high-level training courses for IT teams (systems and network administration, secure development, etc.). More than 500,000 people have already been made aware of or trained in cyber security. References: BPI France, Michelin, CNES, Saint Gobain, Ariane Espace, Alma, the French Ministry of Culture, Naval Group, Dassault Aviation and many others.",
          },
        },
      ],
    },
    datamanagement: {
      key: "datamanagement",
      tab: "SOLUTION - DATA MANAGEMENT",
      sections: [
        {
          title: "Data Management",
          schema: {
            type: "object",
            properties: {
              // Data
              d01: { type: "string", title: "GDPR Compliance", readOnly: true },
              d02: {
                type: "string",
                title: "GDPR Reference Document",
                readOnly: true,
              },
              d03: {
                type: "string",
                title: "Data Classification",
                readOnly: true,
              },
              d05: {
                type: "array",
                title: "Data Storage Countries",
                items: { type: "string", readOnly: true },
              },
              d06: { type: "string", title: "Data Status", readOnly: true },

              // Protection
              e02: {
                type: "array",
                title: "Data Protection Methods",
                items: { type: "string", readOnly: true },
              },
              e01: {
                type: "string",
                title: "Encryption at Rest",
                readOnly: true,
              },
              e03: {
                type: "string",
                title: "Encryption in Transit",
                readOnly: true,
              },
              e05: {
                type: "string",
                title: "Access Control Mechanisms",
                readOnly: true,
              },
              e07: {
                type: "string",
                title: "Additional Comments on Protection",
                readOnly: true,
              },

              // Management (MGT)
              m01: {
                type: "string",
                title: "Data Input Methods",
                readOnly: true,
              },
              m02: {
                type: "string",
                title: "Authentication Methods",
                readOnly: true,
              },
              m03: { type: "string", title: "Data Governance", readOnly: true },

              // Reversibility
              w01: {
                type: "string",
                title: "Data Reversibility Procedures",
                readOnly: true,
              },

              // Compliance
              f01: {
                type: "string",
                title: "Compliance Standards",
                readOnly: true,
              },
              f03: {
                type: "string",
                title: "Compliance Audits",
                readOnly: true,
              },

              // Customer
              k01: {
                type: "string",
                title: "Customer Data Collected",
                readOnly: true,
              },
              k02: {
                type: "string",
                title: "Data Usage and Tracking",
                readOnly: true,
              },
              k04: {
                type: "string",
                title: "Access Rights to Data",
                readOnly: true,
              },
              k05: {
                type: "string",
                title: "Data Security Risk Level",
                readOnly: true,
              },

              // AI
              z01: {
                type: "string",
                title: "AI Data Usage Policies",
                readOnly: true,
              },
            },
          },
          uiSchema: {
            type: "VerticalLayout",
            elements: [
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/d01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/d02" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/d03" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/d05" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/d06" }],
              },
              // Protection
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/e02" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/e01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/e03" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/e05" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/e07" }],
              },
              // Management (MGT)
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/m01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/m02" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/m03" }],
              },
              // Reversibility
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/w01" }],
              },
              // Compliance
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/f01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/f03" }],
              },
              // Customer
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/k01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/k02" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/k04" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/k05" }],
              },
              // AI
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/z01" }],
              },
            ],
          },
          data: {
            d01: "yes",
            d02: "Etant RGPD compliance nous nous référons à ce document",
            d03: "?unknown",
            d05: ["France"],
            d06: "UNKNOWN",
            e02: ["data at rest", "data in transit"],
            e01: "?unknown",
            e03: "?unknown",
            e05: "?unknown",
            e07: "The questions are in places rather ambiguous and hard to answer, more specificity would be helpful",
            m01: "They are created by their employers and provided by the web form or file",
            m02: "Two different ways : 1- directly by our application through email and password 2- SSO => IDP is the employer",
            m03: "?unknown",
            w01: "?unknown",
            f01: "?unknown",
            f03: "?unknown",
            k01: "User first name and last name and e-mail address",
            k02: "Connection data, Tracking data (training progress made)",
            k04: "Only the administrator of the platform / No / Yes",
            k05: "Very low",
            z01: "?unknown",
          },
        },
      ],
    },
    security: {
      key: "security",
      tab: "SOLUTION - SECURITY",
      sections: [
        {
          schema: {
            type: "object",
            properties: {
              p01: { type: "string", title: "Compliance", readOnly: true },
              p07: { type: "string", title: "Risk Level", readOnly: true },
              p08: {
                type: "array",
                title: "Countries of Operation",
                items: { type: "string", readOnly: true },
              },
              // Certification
              c01: {
                type: "array",
                title: "Certifications Obtained",
                items: { type: "string", readOnly: true },
              },
              c03: {
                type: "array",
                title: "Certifications in Progress",
                items: { type: "string", readOnly: true },
              },
              // HR
              h01: {
                type: "string",
                title: "HR Management Details",
                readOnly: true,
              },
              h02: { type: "string", title: "HR Policies", readOnly: true },
              // Dependence Risk
              r01: {
                type: "array",
                title: "Key Dependencies",
                items: { type: "string" },
              },
              r04: {
                type: "string",
                title: "External Audit Availability",
                readOnly: true,
              },
              r05: { type: "string", title: "Audit Frequency", readOnly: true },
              r07: {
                type: "string",
                title: "Disaster Recovery Plans",
                readOnly: true,
              },
              r08: {
                type: "string",
                title: "Backup Procedures",
                readOnly: true,
              },
              r09: {
                type: "string",
                title: "Data Loss Incidents",
                readOnly: true,
              },
              r10: {
                type: "string",
                title: "Data Security Guarantee",
                readOnly: true,
              },
              r11: {
                type: "string",
                title: "SaaS Solution Specificities",
                readOnly: true,
              },
              r12: {
                type: "string",
                title: "Monitoring Tools",
                readOnly: true,
              },
              r13: {
                type: "string",
                title: "System Updates Frequency",
                readOnly: true,
              },
              r14: {
                type: "string",
                title: "Regular Pentesting",
                readOnly: true,
              },
              r15: {
                type: "string",
                title: "Additional Notes",
                readOnly: true,
              },
              // Quality
              q01: {
                type: "string",
                title: "Quality Assurance Plan",
                readOnly: true,
              },
              q02: {
                type: "string",
                title: "Quality Standards",
                readOnly: true,
              },
              q03: {
                type: "string",
                title: "Quality Certifications",
                readOnly: true,
              },
              q07: {
                type: "string",
                title: "Continuous Improvement Processes",
                readOnly: true,
              },
              q11: {
                type: "string",
                title: "Additional Comments on Quality",
                readOnly: true,
              },
              // Transparency
              t01: {
                type: "string",
                title: "Transparency Policies",
                readOnly: true,
              },
              t02: {
                type: "string",
                title: "Information Accessibility",
                readOnly: true,
              },
              // Access
              x01: {
                type: "string",
                title: "Access Management Policies",
                readOnly: true,
              },
              x03: {
                type: "string",
                title: "Access Logs Monitoring",
                readOnly: true,
              },
              x07: {
                type: "string",
                title: "Comments on Access Policies",
                readOnly: true,
              },
              // Interface Training
              i01: {
                type: "array",
                title: "Languages Supported",
                items: { type: "string", readOnly: true },
              },
              i03: { type: "string", title: "Interface Owner", readOnly: true },
              i04: {
                type: "string",
                title: "Comments on Training",
                readOnly: true,
              },
              // Support
              s01: {
                type: "array",
                title: "Support Responsibility",
                items: { type: "string", readOnly: true },
              },
              s02: {
                type: "array",
                title: "Support Countries",
                items: { type: "string", readOnly: true },
              },
              s03: { type: "string", title: "Support SLAs", readOnly: true },
              s05: {
                type: "array",
                title: "Additional Support Locations",
                items: { type: "string", readOnly: true },
              },
              s06: {
                type: "array",
                title: "Support Languages",
                items: { type: "string", readOnly: true },
              },
              s09: {
                type: "string",
                title: "Support Procedures",
                readOnly: true,
              },
              s12: {
                type: "array",
                title: "Training Languages",
                items: { type: "string", readOnly: true },
              },
              s14: {
                type: "string",
                title: "Comments on Support",
                readOnly: true,
              },
            },
          },
          uiSchema: {
            type: "VerticalLayout",
            elements: [
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/p01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/p07" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/p08" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/c01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/c03" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/h01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/h02" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r04" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r05" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r07" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r08" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r09" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r10" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r11" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r12" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r13" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r14" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/r15" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/q01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/q02" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/q03" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/q07" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/q11" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/t01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/t02" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/x01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/x03" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/x07" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/i01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/i03" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/i04" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/s01" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/s02" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/s03" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/s05" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/s06" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/s12" }],
              },
              {
                type: "HorizontalLayout",
                elements: [{ type: "Control", scope: "#/properties/s14" }],
              },
            ],
          },
          data: {
            p01: "?unknown",
            p07: "?unknown",
            p08: ["France"],
            c01: ["?unknown"],
            c03: ["?unknown"],
            h01: "?unknown",
            h02: "?unknown",
            r01: ["?unknown"],
            r04: "yes",
            r05: "on demand audit",
            r07: "?unknown",
            r08: "?unknown",
            r09: "?unknown",
            r10: "no",
            r11: "not applicable as we provide SaaS solution",
            r12: "?unknown",
            r13: "monthly (or more)",
            r14: "regular pentest",
            r15: "The questions are in places rather ambiguous and hard to answer, more specificity would be helpful",
            q01: "?unknown",
            q02: "?unknown",
            q03: "?unknown",
            q07: "?unknown",
            q11: "The questions are in places rather ambiguous and hard to answer, more specificity would be helpful",
            t01: "?unknown",
            t02: "?unknown",
            x01: "?unknown",
            x03: "?unknown",
            x07: "The questions are in places rather ambiguous and hard to answer, more specificity would be helpful",
            i01: ["French", "Spanish", "English"],
            i03: "the vendor",
            i04: "The questions are in places rather ambiguous and hard to answer, more specificity would be helpful",
            s01: ["vendor"],
            s02: ["France"],
            s03: "?unknown",
            s05: ["Spain"],
            s06: ["French", "Spanish", "English"],
            s09: "?unknown",
            s12: ["French", "Spanish", "English"],
            s14: "The questions are in places rather ambiguous and hard to answer, more specificity would be helpful",
          },
        },
      ],
    },
  },
  Solutions: React.FC = () => {
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
            width: "110%",
          }}
        >
          <Space direction="vertical" size="large" style={{ width: "200%" }}>
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
      </>
    );
  };

export default Solutions;
