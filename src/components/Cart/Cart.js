import React, { Component } from 'react';
import { Badge, Icon } from 'antd';
import styled from 'styled-components';

const IconStyled = styled(Icon)`
    font-size: 35px;
    color: #808080;
`;

class Cart extends Component {
    render () {
        return (
            <div style={{float: 'right'}}>
                <Badge count={2}>
                    <a href="#" className="head-example">
                        <IconStyled type="shopping-cart"/>
                    </a>
                </Badge>
            </div>
        );
    }
}

export default Cart;