import React from 'react';
import { Spin, Icon, Row, Col } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Home = () => {
    return (
        <div style={{ paddingTop: "10%" }}>
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <h3>Coming Soon....</h3>
                </Col>
            </Row>
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <Spin indicator={antIcon} />
                </Col>
            </Row>
        </div>
    );
}

export default Home;
