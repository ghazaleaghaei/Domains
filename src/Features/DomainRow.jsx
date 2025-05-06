import { ExclamationCircleOutlined, ExportOutlined, EllipsisOutlined } from '@ant-design/icons';
import Table from "../Components/Table"
import { useState } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";
import DeleteModal from "../Components/DeleteModal";

function DomainRow({ domain, editHandler }) {

    const [isOpen, setIsOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const { modalRef, toggleRef } = useOutsideClick(() => setIsOpen(false));

    return <>
        <Table.Row key={domain.id}>
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
            <td className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full cursor-pointer"
                    ref={toggleRef}
                >
                    <EllipsisOutlined
                        style={{ fontSize: '24px', color: 'gray' }}
                        className="rotate-90"
                    />
                </button>
                {
                    isOpen
                    && <div
                        className="absolute top-5 end-10 lg:end-16 xl:end-20 w-60 min-w-fit border border-gray-200 rounded-md drop-shadow-md p-6 bg-white space-y-3 [&>p]:text-gray-300 [&>button]:cursor-pointer [&>button]:font-semibold"
                        ref={modalRef}
                    >
                        <p>View pages</p>
                        <button onClick={() => editHandler(domain)}>
                            Verify
                        </button>
                        <p>Install script</p>
                        <button
                            className="text-red-400"
                            onClick={() => {
                                setIsDeleteOpen(true)
                                setIsOpen(false)
                            }}
                        >
                            Delete
                        </button>
                    </div>
                }
                {
                    isDeleteOpen
                    && <DeleteModal
                        onClose={() => setIsDeleteOpen(false)}
                        domain={domain}
                    />
                }
            </td>
        </Table.Row>
    </>
}
export default DomainRow
