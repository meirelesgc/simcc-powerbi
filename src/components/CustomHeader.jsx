import { Card, Flex, Typography } from 'antd'
import Simcc from '../svg/Simcc';
import { FaIndustry } from 'react-icons/fa';

const CustomHeader = () => {
    return <Flex align="center" justify="space-between" >
        <Card >
            <Flex gap={'large'}>
                <Typography.Title level={2} strong>
                    Observatorio do Sistema de Mapeamento de Competências
                </Typography.Title>
            </Flex>
        </Card>

        <Flex gap='large'>
            <a href="https://simcc.uesc.br/" target="_blank">
                <Card style={{ height: '100px' }} >
                    <Simcc />
                </Card>
            </a>
            <a href="http://simcc.uesc.br/incite/industria4" target="_blank">
                <Card style={{ height: '100px' }} >
                    <Flex gap={'large'}>
                        <Typography.Title level={2} strong>
                            Incite Industria 4.0
                        </Typography.Title>
                        <FaIndustry fontSize='2.5rem' />
                    </Flex>
                </Card>
            </a>
        </Flex>
    </Flex >
}

export default CustomHeader
