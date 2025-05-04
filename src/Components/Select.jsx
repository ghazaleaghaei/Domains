function Select({ label, name, selectItem, handleChange, options }) {

    return (
        <div className="flex flex-col gap-2 my-4">
            <label htmlFor={name}>
                {label}
            </label>
            <select
                id={name}
                className="rounded-md p-3 outline-none border border-gray-200 text-gray-500"
                value={selectItem}
                onChange={handleChange}
            >
                <option value="">
                    choose status
                </option>
                {
                    options?.map((option) => <option key={option.id} value={option.name}>
                        {option.name}
                    </option>)
                }
            </select>
        </div>
    )
}
export default Select
