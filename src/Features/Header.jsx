import { PlusOutlined } from '@ant-design/icons';

function Header({ onClick }) {

    return <>
        <header className="w-full max-w-7xl mx-auto space-y-8 mb-10">
            <h1 className="text-3xl text-gray-600">
                Domains
            </h1>
            <button
                className="bg-sky-500 w-52 p-3 rounded-md text-white flex items-center justify-center gap-3 cursor-pointer"
                onClick={onClick}
            >
                <PlusOutlined style={{ fontSize: '30px', color: 'white' }} />
                <span>Add Domain</span>
            </button>
        </header>
    </>
}

export default Header
