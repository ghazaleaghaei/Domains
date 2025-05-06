import { PlusOutlined } from '@ant-design/icons';
import Filter from "../Components/Filter";
import Search from "../Components/Search";

function Header({
    onClick,
    search,
    onSearch,
    sorted,
    onSort,
}) {

    return <>
        <header className="w-full max-w-7xl mx-auto space-y-8 mb-10">
            <h1 className="text-3xl text-gray-600">
                Domains
            </h1>
            <div className="lg:flex lg:items-center gap-8 space-y-4 lg:space-y-0">
                <button
                    className="bg-sky-500 w-52 p-3 rounded-md text-white flex items-center justify-center gap-3 cursor-pointer"
                    onClick={onClick}
                >
                    <PlusOutlined style={{ fontSize: '30px', color: 'white' }} />
                    <p>Add Domain</p>
                </button>
                <Filter
                    sorted={sorted}
                    onSort={onSort}
                />
                <Search
                    search={search}
                    onSearch={onSearch}
                />
            </div>
        </header>
    </>
}

export default Header
