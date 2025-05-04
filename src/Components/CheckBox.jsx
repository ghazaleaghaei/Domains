function CheckBox({
    id,
    name,
    value,
    onChange,
    checked,
    label,
}) {
    return <li className="flex items-center gap-x-2 text-gray-600">
        <input
            type="checkbox"
            name={name}
            id={id}
            checked={checked}
            value={value}
            onChange={onChange}
            className="cursor-pointer rounded-full border bg-white w-5 h-5 checked:text-sky-800"
        />
        <label
            htmlFor={id}
            className="cursor-pointer"
        >
            {label}
        </label>
    </li>
}
export default CheckBox
