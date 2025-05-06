import {
    PlusOutlined,
    SearchOutlined,
} from '@ant-design/icons';

function Header({
    onClick,
    search,
    onSearch,
    sorted,
    onSort,
}) {

    const options = [
        {
            id: 1,
            value: "asc",
            name: "Order by Ascending"
        },
        {
            id: 2,
            value: "desc",
            name: "Order by Descending"
        },
        {
            id: 3,
            value: "newest",
            name: "Order by Newest"
        },
        {
            id: 4,
            value: "oldest",
            name: "Order by Oldest"
        },
        {
            id: 5,
            value: "active",
            name: "Active"
        },
        {
            id: 6,
            value: "Verified",
            name: "Verified"
        },
    ]

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
                <select
                    value={sorted}
                    onChange={onSort}
                    className="rounded-md px-3 py-4 outline-none border border-gray-200 text-gray-700 text-sm lg:ms-auto block drop-shadow-xs w-60 lg:w-72"
                >
                    {
                        options.map(item => <option
                            key={item.id}
                            value={item.value}
                        >
                            {item.name}
                        </option>)
                    }
                </select>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={onSearch}
                        className="rounded-md py-3 ps-12 outline-none border border-gray-200 text-gray-600 block drop-shadow-xs w-72 lg:w-80"
                    />
                    <SearchOutlined
                        className="absolute top-1/2 start-4 -translate-y-1/2"
                        style={{ fontSize: '20px', color: 'gray' }}
                    />
                </div>
            </div>
        </header>
    </>
}

export default Header
