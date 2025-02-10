import "./App.css";
import MainContent from "./components/MainContent";
import { Layout } from "antd";
import CustomHeader from "./components/CustomHeader.jsx";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <CustomHeader />
      </Header>
      <Content className="content">
        <MainContent />
      </Content>
      <Footer className="footer">
        Sistema de Mapeamento de Competências ©2025 SIMCC
      </Footer>
    </Layout>
  );
};

export default App;
