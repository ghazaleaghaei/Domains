import { CloseOutlined } from '@ant-design/icons';
import Form from "./Form"

function Modal({ onClose, domainToEdit }) {
    return (<div className="w-screen h-screen fixed top-0 start-0 z-40 grid grid-cols-[20%_80%] lg:grid-cols-[55%_45%]">
        <div
            className="w-full h-full bg-black/50 p-8"
            onClick={onClose}
        >
            <button className="block ms-auto cursor-pointer">
                <CloseOutlined style={{ color: "white", fontSize: '24px' }} />
            </button>
        </div>
        <Form
            domainToEdit={domainToEdit}
            onClose={onClose}
        />
    </div>
    )
}
export default Modal
