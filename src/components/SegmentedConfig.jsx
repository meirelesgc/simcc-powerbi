import { AreaChartOutlined, SearchOutlined, AuditOutlined } from "@ant-design/icons";
import { FaIndustry } from 'react-icons/fa';
const segmentedConfig = [
    {
        label: "Indicadores",
        value: "indicators",
        icon: <AreaChartOutlined />
    },
    {
        label: "Busca de informações",
        value: "search",
        icon: <SearchOutlined />
    },
    {
        label: "Programas de pós-graduação",
        value: "programs",
        icon: <AuditOutlined />
    }
]
export default segmentedConfig;