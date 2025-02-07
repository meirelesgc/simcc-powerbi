import { useState } from "react";
import PowerBI from "./PowerBI";
import { LinkOutlined, RightOutlined } from "@ant-design/icons";
import segmentedConfig from "./SegmentedConfig";
import { Card, Flex, Typography, Segmented, Button, Divider } from "antd";

const MainContent = () => {
    const [powerBI, setPowerBI] = useState('https://app.powerbi.com/view?r=eyJrIjoiYTk2YmEwNjctMGM5Zi00Mzg5LTlhNjItYzA1NWM1YWMxMjNjIiwidCI6IjcyNjE3ZGQ4LTM3YTUtNDJhMi04YjIwLTU5ZDJkMGM1MDcwNyJ9');

    const handleSegmentChange = (value) => {
        switch (value) {
            case "indicators":
                setPowerBI('https://app.powerbi.com/view?r=eyJrIjoiYTk2YmEwNjctMGM5Zi00Mzg5LTlhNjItYzA1NWM1YWMxMjNjIiwidCI6IjcyNjE3ZGQ4LTM3YTUtNDJhMi04YjIwLTU5ZDJkMGM1MDcwNyJ9');
                break;
            case "search":
                setPowerBI('https://app.powerbi.com/view?r=eyJrIjoiOTVmZjM2ZWUtMzliOS00Y2RkLTllYjItMmU3MDg4MjQxOTI5IiwidCI6IjcyNjE3ZGQ4LTM3YTUtNDJhMi04YjIwLTU5ZDJkMGM1MDcwNyJ9');
                break;
            case "programs":
                setPowerBI('https://app.powerbi.com/view?r=eyJrIjoiNmU0MzhlYTAtZGVmZi00NTAxLThhN2UtOTU2NWJkMzNmZjA5IiwidCI6IjcyNjE3ZGQ4LTM3YTUtNDJhMi04YjIwLTU5ZDJkMGM1MDcwNyJ9');
                break;
            case "ind4":
                setPowerBI('https://app.powerbi.com/view?r=eyJrIjoiN2U2NWIxZTQtMjk5Zi00YTQzLWEyZGUtZTNmNThiOTNiOWJmIiwidCI6ImQyNjI5ODQyLTU0YzMtNDFlYy1iYWI1LTJhZGVlYmU5MzljMyJ9');
                break;
        }
    };

    return <Card style={{ borderRadius: '12px', height: '100%', overflow: 'auto', padding: '16px' }}>
        <Flex vertical gap="16px">

            <Flex vertical gap="8px">
                <Typography.Title level={1} strong>
                    Confira as estatísticas de <br />produção pesquisadores mapeados
                </Typography.Title>
                <Typography.Text type="secondary" strong>
                    Explore painéis interativos com dados dos pesquisadores e instituições baianas, agora com<br />
                    informações do OpenAlex e programas de pós-graduação
                </Typography.Text>
            </Flex>
            <Flex justify='space-between'>
                <Segmented
                    size="large"
                    options={segmentedConfig}
                    onChange={handleSegmentChange}
                    default='indicators' />
                <Button href={powerBI} target="_blank" icon={<LinkOutlined />} >Abrir em outra página</Button>
            </Flex>
            <PowerBI powerBI={powerBI} />
        </Flex>
    </Card>
};

export default MainContent;
