import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Space, Typography, Divider, Tag } from 'antd';
import { useParams } from 'react-router-dom';

const { Title, Text, Link: AntLink } = Typography;

const tabsData = {
  main: {
    key: 'main',
    tab: 'VENDOR - MAIN',
    sections: [
      {
        title: 'Vendor Information',
        questions: [
          { question: 'What is the name of the vendor ?', answer: 'Normation SAS' },
          { question: "What is the vendor's website ?", answer: 'https://www.normation.com' },
          { question: "What is the vendor's headquarters location ?", answer: 'Paris, France' },
          { question: 'Year of establishment ?', answer: '2009' },
        ],
      },
    ],
  },
  organization: {
    key: 'organization',
    tab: 'VENDOR - ORGANIZATION',
    sections: [
      {
        title: 'Organization Structure',
        questions: [
          { question: 'What is the legal structure of the vendor ?', answer: 'SAS (Société par Actions Simplifiée)' },
          { question: 'Number of employees ?', answer: '50-100' },
          { question: 'Is the vendor publicly traded ?', answer: 'No' },
        ],
      },
      {
        title: 'Management',
        questions: [
          { question: 'Who is the CEO ?', answer: 'John Doe' },
          { question: 'Who is the CTO ?', answer: 'Jane Smith' },
        ],
      },
    ],
  },
};

const Vendors: React.FC = () => {
  const { tab = 'main' } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeTabData = tabsData[tab as keyof typeof tabsData];

  const content = activeTabData ? (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
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
    <div>
 <div style={
        { backgroundColor: '#ffffff', 
          padding: '24px', marginTop: '-20px',
          marginLeft: '-30px',
          boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
          borderTopLeftRadius: '14px',
          width: '106%' }}>
            
        {/* Vendor Header */}
        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          <Col xs={24} md={8}>
            <Card bordered={false} style={{ background: 'transparent', boxShadow: 'none' }}>
              <Space align="start" style={{ width: '100%' }}>
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
            <Card bordered={false} style={{ background: 'transparent', boxShadow: 'none' }}>
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <AntLink href="https://www.normation.com" target="_blank">
                  https://www.normation.com
                </AntLink>
                <Text>info@normation.com</Text>
                <Text>+33 1 XX XX XX XX</Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} style={{ background: 'transparent', boxShadow: 'none' }}>
              <Space size="small" wrap>
                <Tag color="blue">Software</Tag>
                <Tag color="blue">IT Solutions</Tag>
                <Tag color="blue">DevOps</Tag>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>

      <Divider style={{ 
       borderColor: '#a349a4',
       borderWidth: '2px',
       width: '108%',
       margin: '0',
       marginLeft: '-35px', }} />

<div style={{ 
        backgroundColor: '#ffffff',
        paddingLeft: '10px',
        marginLeft: '-30px',
        marginTop: '15px',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        borderTopLeftRadius: '14px',
        width: '106%'}}>
        {content}
        {content}
      </div>
    </div>
  );
};

export default Vendors;
