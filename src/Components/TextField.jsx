function TextField({
    label,
    name,
    onChange,
    placeholder,
    type = "text",
    value,
}) {
    return (
        <div className="flex flex-col gap-2 my-4">
            <label htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                className="rounded-md p-3 outline-none border border-gray-200 placeholder:text-gray-400"
                type={type}
                autoComplete="off"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}
export default TextField
