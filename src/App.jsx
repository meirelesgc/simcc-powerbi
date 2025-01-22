import './App.css';
import React from 'react';
import MainContent from './components/MainContent';
import { Flex, Layout, Space, Typography } from 'antd';
import Simcc from './svg/Simcc';

const { Header, Content, Footer } = Layout;

const App = () => {
    return <Layout className="layout">
        <Header className="header">
            <Simcc />
            <Typography.Title strong level={3}>
                | Sistema de Mapeamento de Competências
            </Typography.Title>
        </Header>
        <Content className="content">
            <MainContent />
        </Content>
        <Footer className="footer">
            Sistema de Mapeamento de Competências ©2025 SIMCC
        </Footer>
    </Layout >
};

export default App;
