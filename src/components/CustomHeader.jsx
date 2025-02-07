import { Card, Flex, Typography, Popover } from 'antd';
import { ProductOutlined, ClusterOutlined, SettingOutlined } from '@ant-design/icons';

const CustomHeader = () => {
    const content = (
        <div>
            <p><ClusterOutlined style={{ marginRight: 8 }} /><a href="https://simcc.uesc.br/" target="_blank" rel="noopener noreferrer">SIMCC</a></p>
            <p><SettingOutlined style={{ marginRight: 8 }} /><a href="http://simcc.uesc.br/incite/industria4" target="_blank" rel="noopener noreferrer">Incite Indústria 4.0</a></p>
        </div>
    );

    return (
        <Flex align="center" justify="space-between">
            <Card style={{ width: '100%' }}>
                <Flex gap={'large'} justify="space-between">
                    <Typography.Title level={3} strong>
                        Observatorio do Sistema de Mapeamento de Competências
                    </Typography.Title>
                    <Popover content={content} title="Outros Links">
                        <ProductOutlined
                            style={{
                                fontSize: 35,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                        />
                    </Popover>
                </Flex>
            </Card>
        </Flex>
    );
}

export default CustomHeader;
