import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
// import { Card } from 'antd';

import { Card, Col, Row } from 'antd';

function Home(){
return (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Count" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Count" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);
}

export default Home 