import React, { Component } from 'react';
import { Card, Col, Row, Icon, Modal } from 'antd';
import styled from 'styled-components';
import { getAll } from '../../state/product/actions';
import { connect } from "react-redux";
import Button from "antd/es/button/button";

const CardStyled = styled(Card)`
    border-radius: 10px !important;
    .ant-card-head {
        border-radius: 10px 10px 0 0 !important;    
        background: #326342;
        height: 70px;
    }
`;

const IconStyled = styled(Icon)`
    font-size: 50px;
    color: #808080;
`;

const Header = styled.div`
    color: white;
    .productName { 
        font-size: 18px;
        font-weight: bold;
        height: 50%;
        width: 60%;
        float: left;
    };
    .category {
        font-size: 15px;
        height: 50%;
        line-height: 12px;
        width: 60%;
        float: left;
    };
    .price {
        float: right;
        font-size: 25px;
        font-weight: bold;
        color: #F5DA81;
        height: 100%;
        margin-top: -35px !important;
    }
`;

const ModalStyled = styled(Modal)`
    .primaryButton {
        background: #808080;
    }
`;


class Product extends Component {

    state = {
        visible: false
    }

    componentDidMount () {
        this.props.dispatch(getAll(this.props.dispatch));
    }

    renderHeader(item) {
        return (
            <Header>
                <div className="productName">
                    {item.name}
                </div>
                <div className="category">
                    {item.category}
                </div>
                <div className="price">
                    ${item.price}
                </div>
            </Header>
        );
    }

    showModal = () => {
        this.setState({
           visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
           visible: false
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={10}>
                    {
                        this.props.products.map(item => (
                            <Col xs={24} sm={8} md={6} style={{marginTop: 15}} key={item.id}>
                                <CardStyled title={this.renderHeader(item)} bordered={false}>
                                    <img width="100%" src={item.image} alt="imagen" />
                                    <a onClick={this.showModal}><IconStyled type="shopping-cart" /></a>
                                </CardStyled>
                            </Col>
                        ))
                    }
                </Row>
                <ModalStyled
                    title="Product detail"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                        <Button key="submit" className="primaryButton" type="primary" onClick={this.handleOk}>
                            Add to cart
                        </Button>,
                    ]}
                >
                    <p>Some contents</p>
                    <p>Some contents</p>
                    <p>Some contents</p>
                </ModalStyled>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.productsList.message,
        products: state.productsList.products
    }
}

export default connect(mapStateToProps)(Product);