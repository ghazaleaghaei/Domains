import { CloseOutlined } from '@ant-design/icons';
import { useDeleteDomainMutation } from "../Services/domainsApi";
import toast from "react-hot-toast";

function DeleteModal({ onClose, domain }) {

    const [deleteDomain, { isLoading }] = useDeleteDomainMutation();

    const handleDelete = async (id) => {
        try {
            await deleteDomain(id).unwrap();
            toast.success("successfully deleted")
        } catch (err) {
            if (err.status === 404) {
                toast.error("not found domain");
            } else {
                toast.error("delete failed")
            }
        }
    }

    return <>
        <div
            className="w-screen h-screen fixed top-0 start-0 z-40 bg-black/50"
            onClick={onClose}
        >
            <button className="block ms-auto cursor-pointer">
                <CloseOutlined style={{ color: "white", fontSize: '24px' }} />
            </button>
        </div>

        <div className="fixed top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg px-4 py-8 shadow-lg transition-all duration-300 bg-white w-[calc(100vw-2rem)] max-w-xl max-h-[calc(100vh-2rem)] overflow-y-auto z-50 space-y-10">

            <div className="flex border-b border-b-gray-300 justify-between pb-2">
                <strong>{`delete ${domain.domain}`}</strong>
                <button onClick={onClose}>
                    <span className="text-red-700 cursor-pointer">&#x274C;</span>
                </button>
            </div>

            <h2>
                are you sure to delete {domain.domain}?
            </h2>

            <div className="flex justify-between [&>button]:rounded [&>button]:disabled:opacity-50 [&>button]:duration-300 [&>button]:w-24 [&>button]:h-12 [&>button]:cursor-pointer">
                <button className="border border-gray-200"
                    disabled={isLoading}
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button
                    disabled={isLoading}
                    onClick={() => handleDelete(domain.id)}
                    className="border border-red-400 text-red-400"
                >
                    {isLoading ? 'Deleting...' : 'Delete'}
                </button>
            </div>

        </div>
    </>
}
export default DeleteModal
