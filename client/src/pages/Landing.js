import React from 'react';
import { Button, Row, Col, Menu, Dropdown, Icon } from 'antd';
import Logo from '../assets/images/Cover.jpg';
// import { useHistory } from 'react-router-dom';



class Landing extends React.Component {

    handleMenuClick = (e) => {
        let path;
        switch (e.key) {
            case "1":
                console.log("Home");
                path = `/home`
                break;
            case "2":
                console.log("Projects");
                path = `/home`
                break;
            case "3":
                console.log("Contact Me");
                path = `/home`;
                break;
            case "4":
                console.log("Resume");
                path = `/home`;
                break;
            default:
                break;
        }
        this.props.history.push(path);
    }

    render() {
        const menu = (
            <Menu className="menu" onClick={this.handleMenuClick}>
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
}

export default Landing;