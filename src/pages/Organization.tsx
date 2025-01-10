import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Organization: React.FC = () => {
  return (
    <div>
      <Title level={4}>Organization</Title>
      <Divider style={{ borderColor: '#a349a4',borderWidth: '2px', width: '100%'}} />

    </div>
  );
};

export default Organization; 
