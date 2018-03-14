import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

class MenuApp extends Component {
    state = {
        current: 'home',
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render () {
        return (
            <Menu theme="dark" onClick={this.handleClick} selectedKeys={this.state.current} mode="horizontal"
                  style={{ lineHeight: '64px', backgroundColor: '#234F32', float: 'left' }}
            >
                <Menu.Item key="home">
                    <Link to="/home">
                        <Icon type="appstore"/> Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="product">
                    <Link to="/product">
                        <Icon type="shopping-cart"/> Products
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default MenuApp;