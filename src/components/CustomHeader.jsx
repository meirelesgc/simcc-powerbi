import { Card, Flex, Typography, Popover } from 'antd';
import { ProductOutlined, SettingOutlined, FundOutlined } from '@ant-design/icons';

const CustomHeader = () => {
    const content = (
        <div>
            <p><SettingOutlined style={{ marginRight: 8 }} /><a href="http://simcc.uesc.br/incite/industria4" target="_blank" rel="noopener noreferrer">Incite Indústria 4.0</a></p>
        </div>
    );

    return (
        <Flex align="center" justify="space-between">
            <Card style={{ width: '83%' }}>
                <Flex gap={'large'} justify="space-between">
                    <Typography.Title level={3} strong>
                        Observatorio do Sistema de Mapeamento de Competências
                    </Typography.Title>
                </Flex>
            </Card>
            <a href="https://simcc.uesc.br/" target="_blank" rel="noopener noreferrer">
                <Card >
                    <Flex gap={'large'} justify="space-between" style={{ width: '100%' }}>
                        <Typography.Title level={3} strong style={{ flex: '1' }}>SIMCC</Typography.Title>
                        <FundOutlined style={{
                            fontSize: 35,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }} />
                    </Flex>
                </Card>
            </a>
            <Popover content={content} title="Outros Links">
                <Card style={{ width: '8%' }}>
                    <Flex gap={'large'} justify="space-between" style={{ width: '100%' }}>
                        <Typography.Title level={3} strong style={{ flex: '1' }}>Incite</Typography.Title>
                        <ProductOutlined style={{
                            fontSize: 35,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }} />
                    </Flex>
                </Card>
            </Popover>
        </Flex >
    );
}

export default CustomHeader;
