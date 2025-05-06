import { SearchOutlined } from '@ant-design/icons';

function Search({
    search,
    onSearch,
}) {
    return <div className="relative">
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
}

export default Search
