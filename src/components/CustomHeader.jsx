import { Card, Flex, Typography, Dropdown, Menu } from "antd";
import {
  ProductOutlined,
  SettingOutlined,
  FundOutlined,
} from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a
        href="http://simcc.uesc.br/incite/industria4"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <SettingOutlined style={{ marginRight: 8 }} /> Incite Indústria 4.0
      </a>
    </Menu.Item>
  </Menu>
);

const CustomHeader = () => {
  return (
    <Card
      style={{
        padding: "1rem",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Flex align="center" justify="space-between" wrap="wrap" gap={20}>
        <Typography.Title level={3} strong>
          Observatório do Sistema de Mapeamento de Competências
        </Typography.Title>
        <Flex align="center" gap={15} style={{ marginLeft: "auto" }}>
          <a
            href="https://simcc.uesc.br/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1890ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
          >
            <Typography.Title level={4} strong style={{ margin: 0 }}>
              SIMCC
            </Typography.Title>
            <FundOutlined
              style={{ fontSize: 28, cursor: "pointer" }}
              aria-label="SIMCC"
              title="SIMCC"
            />
          </a>
          <Dropdown overlay={menu} placement="bottomRight">
            <Flex
              align="center"
              gap={8}
              style={{
                cursor: "pointer",
                marginLeft: "20px",
                transition: "color 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1890ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
            >
              <Typography.Title level={4} strong style={{ margin: 0 }}>
                Incite
              </Typography.Title>
              <ProductOutlined
                style={{ fontSize: 28 }}
                aria-label="Incite"
                title="Incite"
              />
            </Flex>
          </Dropdown>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CustomHeader;
