import React from 'react';
import { Button, Row, Col, Menu, Dropdown, message, Icon } from 'antd';
import Logo from '../assets/images/Cover.jpg';

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('Click', e);
}

const menu = (
    <Menu className="menu" onClick={handleMenuClick}>
        <Menu.Item className="menu-item" key="1">
            <Icon type="home" />
            Home
      </Menu.Item>
        <Menu.Item className="menu-item" key="2">
            <Icon type="book" />
            Projects
      </Menu.Item>
        <Menu.Item className="menu-item" key="3">
            <Icon type="phone" />
            Contact
      </Menu.Item>
        <Menu.Item className="menu-item" key="4">
            <Icon type="file-text" />
            Resume
      </Menu.Item>
    </Menu>
)

const Home = () => {
    return (
        <div className="bg-home">
            <div className="pad-top">
                <Row type="flex" justify="center" align="middle">
                    <Col>
                        <Dropdown overlay={menu} visible={true} placement="bottomCenter">
                            <Button className="btn-size" type="default" shape="circle">
                                <img className="btn-size" id="cover" src={Logo} alt="" />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;