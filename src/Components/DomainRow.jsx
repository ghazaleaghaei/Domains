import { ExclamationCircleOutlined, ExportOutlined, EllipsisOutlined } from '@ant-design/icons';
import Table from "./Table"

function DomainRow({ domain }) {

    console.log(domain)
    return <Table.Row key={domain.id}>
        <td className="flex gap-3 items-center">
            {
                domain.isActive
                    ? <div className="w-3 aspect-square bg-green-500 rounded-full" />
                    : <ExclamationCircleOutlined style={{ color: 'red' }} />
            }
            {domain.domain}
            <ExportOutlined style={{ fontSize: '14px', color: 'gray' }} />
        </td>
        <td className={domain.isActive ? "text-green-700" : "text-red-500"}>
            {
                domain.isActive
                    ? "Active"
                    : "Not Active"
            }
        </td>
        <td className={domain.status == "verified" ? "text-green-700" : domain.status == "rejected" ? "text-red-500" : "text-gray-400"}>
            {domain.status}
        </td>
        <td>
            {new Date(domain.createdDate).toLocaleDateString("en-UK")}
        </td>
        <td>
            <EllipsisOutlined
                style={{ fontSize: '24px', color: 'gray' }}
                className="rotate-90"
            />
        </td>
    </Table.Row>
}
export default DomainRow
