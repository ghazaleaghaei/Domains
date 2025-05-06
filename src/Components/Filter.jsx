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


function Filter({
    sorted,
    onSort,
}) {
    return <select
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
}

export default Filter
