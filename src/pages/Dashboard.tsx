import { Tabs } from 'antd';
import React, { useState } from 'react';

const { TabPane } = Tabs;

const Dashboard: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string>('1');

    const handleTabChange = (key: string) => {
        setActiveKey(key);
    };

    return (
        <div>
            <Tabs activeKey={activeKey} onChange={handleTabChange}>
                <TabPane tab="Tab 1" key="1">
                    <div>Content of Tab 1</div>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    <div>Content of Tab 2</div>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Dashboard;