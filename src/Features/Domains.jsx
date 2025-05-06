import { useDeferredValue, useState } from "react"
import DomainsTable from "./DomainsTable"
import Header from "./Header"
import Modal from "../Components/Modal"

function Domains() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [domainToEdit, setDomainToEdit] = useState({})
    const [search, setSearch] = useState("");
    const deferredQuery = useDeferredValue(search)
    const [sorted, setSorted] = useState("asc");

    const editHandler = (domain) => {
        setIsModalOpen(true)
        setDomainToEdit(domain)
    }

    return <section className="p-8">
        <Header
            onClick={() => setIsModalOpen(true)}
            onSearch={(e) => setSearch(e.target.value)}
            onSort={(e) => setSorted(e.target.value)}
            search={search}
            sorted={sorted}
        />
        <DomainsTable
            deferredQuery={deferredQuery}
            editHandler={editHandler}
            sorted={sorted}
        />
        {
            isModalOpen
            && <Modal
                onClose={() => {
                    setIsModalOpen(false)
                    setDomainToEdit({})
                }}
                open={isModalOpen}
                domainToEdit={domainToEdit}
            />
        }
    </section>
}
export default Domains
