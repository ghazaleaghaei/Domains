function Table({ children }) {
    return (
        <div className="max-w-7xl mx-auto overflow-x-auto">
            <table className="min-w-full table-auto">
                {children}
            </table>
        </div>
    )
}
export default Table;


function TableHeader({ children }) {
    return (
        <thead>
            <tr className="*:p-4 border border-gray-100 text-nowrap *:text-start *:font-medium *:text-gray-400">
                {children}
            </tr>
        </thead>
    )
}

function TableBody({ children }) {
    return <tbody>
        {children}
    </tbody>
}

function TableRow({ children }) {
    return <tr className="*:p-4 border border-gray-100 h-fit *:font-medium">{children}</tr>
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
