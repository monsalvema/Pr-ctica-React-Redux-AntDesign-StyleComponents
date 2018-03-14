import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Product from '../components/Product/Product';
import Error404 from '../components/Error/Error404';
import Home from './Home';
import MenuApp from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";
import { Layout } from 'antd';
import '../styles/index.css';

const { Header, Content, Footer } = Layout;

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/product" component={Product}/>
        <Route component={Error404}/>
    </Switch>
);

const Document = () => (
    <div>
        <Layout>
            <Header style={{backgroundColor: '#234F32'}}>
                <img style={{width: '100px', float: 'left'}} src="./descarga.png" alt="logo"/>
                <MenuApp />
                <Cart />
            </Header>
            <Content>
                <Routes />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Jhonatan Monsalve @2018
            </Footer>
        </Layout>
    </div>
);

export default Document;