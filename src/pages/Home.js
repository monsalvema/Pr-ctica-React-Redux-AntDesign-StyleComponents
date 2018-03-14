import React, { Component } from 'react';
import { Card, Row, Col, Carousel } from 'antd';
import styled from 'styled-components';

const CarouseStyled = styled(Carousel)`
    height: 350px !important;
    background-color: grey;
`;

const ImgStyled = styled.img`
  height: 350px !important;
  width: 100%;
`;

const CardStyled = styled(Card)`
  width: 300px; 
  border-color: #9AEF3F;
`;

class Home extends Component {
    render () {
        return (
            <div>
                <CarouseStyled autoplay>
                    <div><ImgStyled src="./grocery2.jpg"/></div>
                    <div><ImgStyled src="./grocery2.jpg"/></div>
                    <div><ImgStyled src="./grocery2.jpg"/></div>
                    <div><ImgStyled src="./grocery2.jpg"/></div>
                </CarouseStyled>
                <div style={{ padding: '30px'}}>
                    <Row gutter={10}>
                        <Col xs={24} sm={8} md={6} key="new1" style={{marginTop: 15}}>
                            <CardStyled title="News" key="new1" style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </CardStyled>
                        </Col>
                        <Col xs={24} sm={8} md={6} key="new2" style={{marginTop: 15}}>
                            <CardStyled title="News" key="new2" style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </CardStyled>
                        </Col>
                        <Col xs={24} sm={12} md={8} key="new3" style={{marginTop: 15}}>
                            <CardStyled title="News" key="new3" style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </CardStyled>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    };
}

export default Home;